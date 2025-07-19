// scrape-credly.cjs (IFRAME-AWARE MANUAL HELPER)

const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const cheerio = require('cheerio');
const fs = require('fs');

const CREDLY_URL = 'https://www.credly.com/users/jay-kumar.66736ef5/badges';
const OUTPUT_PATH = 'public/badges.json';

// These selectors are still correct, but we need to find them *inside* the iframe.
const BADGE_SELECTOR = '[data-e2e-badge-card]';
const COOKIE_BUTTON_SELECTOR = 'button#onetrust-accept-btn-handler';
// Selector to find the iframe itself. We'll look for any iframe.
const IFRAME_SELECTOR = 'iframe'; 

async function scrapeAndSaveBadges() {
  console.log('[IFRAME-HELPER] Launching VISIBLE browser. The final attempt!');
  const browser = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });

  try {
    const page = await browser.newPage();
    await page.goto(CREDLY_URL, { waitUntil: 'networkidle2' });
    
    // The script will still try to click the main page's cookie button.
    try {
      await page.click(COOKIE_BUTTON_SELECTOR, { timeout: 5000 });
      console.log('[IFRAME-HELPER] Main page cookie button clicked.');
    } catch (e) { /* no-op */ }

    console.log('[IFRAME-HELPER] Looking for the content iframe...');
    // Wait for the iframe to exist on the main page.
    await page.waitForSelector(IFRAME_SELECTOR, { timeout: 10000 });
    const iframeHandle = await page.$(IFRAME_SELECTOR);
    const frame = await iframeHandle.contentFrame();

    if (!frame) {
      throw new Error("Could not find the content frame (iframe).");
    }
    console.log('[IFRAME-HELPER] Found iframe! Now operating inside it.');

    console.log('--- YOUR TURN ---');
    console.log('1. The page is ready. Please scroll down with your mouse.');
    console.log('2. Scroll until all your badges are visible on the screen.');
    console.log('The script is waiting for the badges to appear *inside the iframe*...');

    // *** THE KEY CHANGE: We are now waiting INSIDE the frame, not the page. ***
    await frame.waitForSelector(BADGE_SELECTOR, { timeout: 60000 });

    console.log('[IFRAME-HELPER] SUCCESS! Badges found inside the iframe!');
    const finalHtml = await frame.content(); // Get content from the iframe
    const $ = cheerio.load(finalHtml);
    const badges = [];

    $(BADGE_SELECTOR).each((index, element) => {
      const badgeElement = $(element);
      const title = badgeElement.find('[data-e2e-badge-title]').text().trim();
      const imageUrl = badgeElement.find('[data-e2e-badge-image]').attr('src');
      const badgeUrl = new URL(badgeElement.closest('a').attr('href'), 'https://www.credly.com').href;
      if (title && imageUrl && badgeUrl) { badges.push({ title, imageUrl, badgeUrl }); }
    });

    if (badges.length > 0) {
      fs.writeFileSync(OUTPUT_PATH, JSON.stringify(badges, null, 2));
      console.log(`[IFRAME-HELPER] FILE SAVED! Found ${badges.length} badges.`);
    }
  } catch (error) {
    console.error('[IFRAME-HELPER] The iframe theory failed.', error.name);
  } finally {
    console.log('[IFRAME-HELPER] Closing browser.');
    await browser.close();
  }
}
scrapeAndSaveBadges();
