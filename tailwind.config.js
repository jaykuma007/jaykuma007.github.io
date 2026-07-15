// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // This correctly scans all your React component files in the 'src' directory
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // This is the section you need to add
    extend: {
      colors: {
        // Primary Colors
        'primary-navy': '#1e293b',         // Deep navy blue for primary backgrounds
        'content-white': '#ffffff',        // Clean white for content areas
        'content-off-white': '#f8fafc',     // Off-white for content areas
        'professional-soft-blue': '#3b82f6', // Soft blue for professional category highlights

        // Accent Colors
        'academic-emerald-green': '#10b981', // Emerald green for academic sections
        'personal-warm-orange': '#f59e0b',  // Warm orange for creative/personal elements
        'secondary-light-purple': '#8b5cf6', // Light purple for secondary highlights

        // Typography Colors
        'text-dark-gray': '#1f2937',      // Dark gray for primary text
        'text-medium-gray': '#6b7280',     // Medium gray for secondary text
      },
    },
  },
  plugins: [],
}
