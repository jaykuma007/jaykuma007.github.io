import React, { useEffect, useState } from 'react';
import {
  FaLinkedin, FaGithub, FaEnvelope, FaCloudUploadAlt, FaRocket, FaShieldAlt,
  FaBrain, FaTwitter, FaBars, FaTimes, FaStar, FaBookOpen, FaRobot, FaServer,
  FaMapMarkerAlt, FaArrowRight, FaExternalLinkAlt,
} from 'react-icons/fa';

// ---------- Data ----------
const personalInfo = {
  name: 'Jay Kumar',
  title: 'Multi-Cloud Platform Architect',
  location: 'Tokyo, Japan',
  email: 'jay.choubey007@gmail.com',
  linkedin: 'https://linkedin.com/in/jayk007',
  github: 'https://github.com/jaykuma007',
  twitter: 'https://x.com/jaychoubey',
  summary:
    'Senior Manager and Multi-Cloud Platform Architect with 16 years of experience building and operating large-scale cloud, AI, and telco platforms. I lead engineering teams, design secure multi-cloud architectures, and turn complex infrastructure into reliable products.',
};

const heroRoles = [
  { highlight: 'Multi-Cloud Platform Architect', subtitle: 'Scalable, secure, resilient infrastructure across Azure, AWS, and GCP.' },
  { highlight: 'AI Platform Engineer', subtitle: 'RAG, MLOps, and production AI platforms — from GPUs to guardrails.' },
  { highlight: 'SRE & Cloud Ops Leader', subtitle: 'Led 30+ engineers keeping national-scale telco platforms up.' },
];

const stats = [
  { value: '16+', label: 'Years in production infrastructure' },
  { value: '30+', label: 'Engineers led and mentored' },
  { value: '$5M', label: 'Annual savings from modernization' },
  { value: '10+', label: 'Industry certifications' },
];

const featuredWork = [
  {
    icon: <FaBookOpen />,
    title: 'AI Platform Engineering Handbook',
    description: '4 volumes, 45 chapters on AI evals, RAG, agents, LLM serving, Kubernetes, and AI security. Free and open source.',
    link: 'https://github.com/jaykuma007/AI-Platform-Engineering-Handbook',
    tags: ['AI Evals', 'RAG', 'LLM Serving', 'Kubernetes'],
  },
  {
    icon: <FaRobot />,
    title: 'Agentic SRE — Incident Response Agent',
    description: 'LLM-driven agent that triages Datadog alerts, diagnoses root cause, and remediates on Kubernetes within safety guardrails.',
    link: 'https://github.com/jaykuma007/SRE-incident-response-agent',
    tags: ['LangGraph', 'Datadog', 'Kubernetes', 'OpenTelemetry'],
  },
  {
    icon: <FaServer />,
    title: 'NCA-AIIO Study Notes',
    description: 'Study material for the NVIDIA Certified Associate — AI Infrastructure and Operations certification.',
    link: 'https://github.com/jaykuma007/NCA-AIIO',
    tags: ['NVIDIA', 'GPU', 'AI Infrastructure'],
  },
];

const services = [
  { icon: <FaCloudUploadAlt />, title: 'Cloud Modernisation', description: 'Upgrading legacy systems to scalable, efficient cloud-native architectures.' },
  { icon: <FaBrain />, title: 'AI Platforms & MLOps', description: 'Architecting RAG, MLOps, and production AI platforms end to end.' },
  { icon: <FaShieldAlt />, title: 'Security & Zero Trust', description: 'Vault, IAM, and layered security for regulated enterprise environments.' },
  { icon: <FaRocket />, title: 'SRE & Platform Ops', description: 'Reliability engineering, observability, and Day-2 operations at scale.' },
];

const jobExperiences = [
  { title: 'Senior Manager — Multi-Cloud & Security Platform', company: 'Asahi Group Holdings', period: 'Sep 2022 – Present', location: 'Tokyo, Japan', summary: 'Leading multi-cloud and security platform engineering; Vault for 300+ apps, enterprise AI platform with RAG, Terraform automation cutting manual work by 80%.' },
  { title: 'Head of Cloud Ops', company: 'Rakuten Mobile', period: 'Jan 2019 – Aug 2022', location: 'Tokyo, Japan', summary: 'Led 30 SREs running Japan\'s greenfield telco cloud — 4G OpenStack and 5G Kubernetes at national scale, delivered in 1.5 years.' },
  { title: 'Senior SRE — OCI Compute', company: 'Oracle', period: '2017 – 2019', location: 'India', summary: 'Operated Oracle Cloud Infrastructure compute, Exadata/Exalogic, and the Java middleware ecosystem.' },
  { title: 'Technical Services Specialist — UNIX/HPC', company: 'IBM', period: '2015 – 2017', location: 'India', summary: 'Lead administrator for Solaris, HP-UX, and AIX platforms; HA clusters and SAP workloads.' },
  { title: 'Assistant Manager — Build Platform', company: 'Samsung', period: '2013 – 2015', location: 'India', summary: 'Led Linux server and SAN/NAS storage infrastructure with capacity planning and security frameworks.' },
  { title: 'Senior Analyst — UNIX/Linux/HPC', company: 'HCL', period: '2011 – 2013', location: 'India', summary: 'SME for RHEL/AIX/HP-UX in mission-critical environments; HLD/LLD design and DR drills.' },
  { title: 'NOC Engineer', company: 'CMC (TCS)', period: '2010 – 2011', location: 'India', summary: 'Cisco networking for pan-India core banking infrastructure under 24/7 SLAs.' },
];

const skillCategories = [
  { title: 'Cloud Platforms', items: ['Azure', 'AWS', 'GCP', 'OCI', 'OpenStack'] },
  { title: 'AI Platforms & MLOps', items: ['Azure OpenAI', 'RAG', 'MLOps', 'AI Evals', 'vLLM'] },
  { title: 'Containers & Orchestration', items: ['Kubernetes', 'OpenShift', 'Docker', 'KServe'] },
  { title: 'DevOps & Automation', items: ['Terraform', 'Ansible', 'CI/CD', 'GitHub Actions'] },
  { title: 'Security & Identity', items: ['HashiCorp Vault', 'IAM', 'Zero Trust', 'Entra ID'] },
  { title: 'Core Infrastructure', items: ['Linux / UNIX', 'HPC & GPU Infra', 'Storage (SAN/NAS)', 'Networking'] },
];

const certifications = [
  { logo: '/logos/logo-togaf.png', title: 'TOGAF® Enterprise Architecture Practitioner' },
  { logo: '/logos/logo-k8s.png', title: 'Certified Kubernetes Administrator (CKA)' },
  { logo: '/logos/logo-cks.png', title: 'Certified Kubernetes Security Specialist (CKS)' },
  { logo: '/logos/logo-redhat.png', title: 'Red Hat Certified OpenShift Administrator' },
  { logo: '/logos/logo-microsoft.png', title: 'Azure Solutions Architect Expert' },
  { logo: '/logos/logo-microsoft.png', title: 'Azure DevOps Engineer Expert' },
  { logo: '/logos/logo-redhat.png', title: 'Red Hat Certified Engineer (RHCE)' },
  { logo: '/logos/logo-ibm.png', title: 'IBM Certified AIX 7 Administrator' },
  { logo: '/logos/scrum_alliance_logo.jpeg', title: 'Certified ScrumMaster (CSM)' },
];

const interests = [
  { icon: '✈️', title: 'Travel & Culture', description: 'Exploring new cultures, landscapes, and cuisines around the world.' },
  { icon: '🧠', title: 'AI & LLMs', description: 'Following frontier models, agentic AI, and what they mean for infrastructure.' },
  { icon: '📚', title: 'Writing & Teaching', description: 'Author of the open-source AI Platform Engineering Handbook.' },
  { icon: '👥', title: 'Mentorship', description: 'Helping engineers grow into platform and AI engineering roles.' },
  { icon: '📷', title: 'Photography', description: 'Landscapes and street photography, mostly while travelling.' },
  { icon: '⛰️', title: 'Japan Life', description: 'Hiking and exploring Japan, from Tokyo backstreets to Mt. Fuji.' },
];

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

// ---------- Small building blocks ----------
const SectionHeader: React.FC<{ eyebrow: string; title: string; description?: string }> = ({ eyebrow, title, description }) => (
  <div className="max-w-2xl mx-auto text-center mb-14">
    <p className="text-sky-400 font-semibold tracking-widest uppercase text-xs mb-3">{eyebrow}</p>
    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
    {description && <p className="mt-4 text-slate-400 leading-relaxed">{description}</p>}
  </div>
);

// ---------- Page ----------
const Portfolio: React.FC = () => {
  const [role, setRole] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setRole((r) => (r + 1) % heroRoles.length), 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-slate-950 text-slate-300 font-sans antialiased selection:bg-sky-500/30">

      {/* Nav */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'bg-slate-950/85 backdrop-blur border-b border-slate-800' : 'bg-transparent'}`}>
        <nav className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <a href="#home" className="text-lg font-bold text-white tracking-tight">
            jay<span className="text-sky-400">kumar</span><span className="text-slate-500">.io</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-slate-400 hover:text-white transition-colors">{l.label}</a>
            ))}
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-1.5 text-slate-200 hover:border-sky-500 hover:text-sky-400 transition-colors">
              <FaGithub /> GitHub
            </a>
          </div>
          <button className="md:hidden text-slate-300 p-2" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur border-b border-slate-800 px-6 py-4 flex flex-col gap-4 text-sm">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-slate-300 hover:text-white">{l.label}</a>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(56,132,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(56,132,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-52 -left-40 w-[36rem] h-[36rem] bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
            <p className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 border border-slate-800 rounded-full px-3 py-1.5 mb-8">
              <FaMapMarkerAlt className="text-sky-400" /> {personalInfo.location} · Open to senior platform & AI roles
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
              Hi, I'm Jay Kumar.<br />
              <span key={role} className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent animate-[fadeIn_.7s_ease]">
                {heroRoles[role].highlight}
              </span>
            </h1>
            <p key={`s${role}`} className="mt-6 text-lg text-slate-400 max-w-xl animate-[fadeIn_.7s_ease]">{heroRoles[role].subtitle}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#work" className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition-colors">
                View my work <FaArrowRight />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold px-6 py-3 rounded-lg transition-colors">
                Get in touch
              </a>
            </div>
            <div className="mt-10 flex gap-5 text-slate-500">
              <a aria-label="GitHub" href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaGithub size={22} /></a>
              <a aria-label="LinkedIn" href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaLinkedin size={22} /></a>
              <a aria-label="Twitter" href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><FaTwitter size={22} /></a>
              <a aria-label="Email" href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors"><FaEnvelope size={22} /></a>
            </div>
          </div>
          <div className="hidden lg:flex absolute right-10 xl:right-24 top-1/2 -translate-y-1/2 gap-2 flex-col">
            {heroRoles.map((_, i) => (
              <button key={i} onClick={() => setRole(i)} aria-label={`Slide ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === role ? 'bg-sky-400' : 'bg-slate-700 hover:bg-slate-500'}`} />
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-slate-800/70 bg-slate-900/40">
          <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-white">{s.value}</p>
                <p className="mt-2 text-sm text-slate-400">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader eyebrow="About" title="Engineer first, leader always" />
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 max-w-xs">
                <div className="rounded-2xl p-1 bg-gradient-to-br from-sky-500/60 to-indigo-500/60">
                  <img src="/j.jpeg" alt={personalInfo.name} className="rounded-xl w-full object-cover" />
                </div>
              </div>
              <div className="md:w-2/3">
                <p className="text-lg leading-relaxed text-slate-300">{personalInfo.summary}</p>
                <p className="mt-4 leading-relaxed text-slate-400">
                  Right now I lead multi-cloud and security platform engineering at Asahi Group Holdings in Tokyo,
                  and I write the open-source <a href="https://github.com/jaykuma007/AI-Platform-Engineering-Handbook" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">AI Platform Engineering Handbook</a> —
                  a practical guide for engineers building enterprise AI platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured work */}
        <section id="work" className="py-24 bg-slate-900/40 border-y border-slate-800/70">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader eyebrow="Featured Work" title="Things I've built and shared"
              description="Open-source projects and writing — star them on GitHub if they help you." />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredWork.map((w) => (
                <a key={w.title} href={w.link} target="_blank" rel="noopener noreferrer"
                   className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-950/60 p-7 hover:border-sky-500/60 hover:-translate-y-1 transition-all duration-300">
                  <div className="text-sky-400 text-3xl mb-5">{w.icon}</div>
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    {w.title}
                    <FaExternalLinkAlt className="text-slate-600 text-xs group-hover:text-sky-400 transition-colors" />
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400 flex-1">{w.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {w.tags.map((t) => (
                      <span key={t} className="text-xs font-medium text-sky-300/90 bg-sky-500/10 border border-sky-500/20 rounded-full px-2.5 py-1">{t}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
            <p className="mt-10 text-center">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition-colors">
                <FaStar className="text-amber-400" /> See everything on GitHub
              </a>
            </p>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader eyebrow="What I Do" title="Where I can help" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s) => (
                <div key={s.title} className="rounded-2xl border border-slate-800 p-7 hover:border-slate-600 transition-colors">
                  <div className="text-sky-400 text-3xl mb-4">{s.icon}</div>
                  <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-24 bg-slate-900/40 border-y border-slate-800/70">
          <div className="max-w-4xl mx-auto px-6">
            <SectionHeader eyebrow="Experience" title="16 years, from NOC to platform leadership" />
            <div className="relative border-l border-slate-700 ml-3">
              {jobExperiences.map((job, i) => (
                <div key={i} className="relative pl-8 pb-12 last:pb-0">
                  <span className={`absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full ring-4 ring-slate-950 ${i === 0 ? 'bg-sky-400' : 'bg-slate-600'}`} />
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-base font-semibold text-white">{job.title}</h3>
                    <span className="text-sm text-sky-400 font-medium">{job.company}</span>
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{job.period} · {job.location}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{job.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader eyebrow="Skills" title="The stack I work with" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((c) => (
                <div key={c.title} className="rounded-2xl border border-slate-800 p-6">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">{c.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {c.items.map((s) => (
                      <span key={s} className="text-xs font-medium text-slate-300 bg-slate-800/80 border border-slate-700 rounded-full px-3 py-1.5">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="py-24 bg-slate-900/40 border-y border-slate-800/70">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader eyebrow="Credentials" title="Licenses & certifications" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {certifications.map((cert, i) => (
                <div key={i} className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4 hover:border-slate-600 transition-colors">
                  <span className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shrink-0 p-1.5">
                    <img src={cert.logo} alt="" className="max-w-full max-h-full object-contain" />
                  </span>
                  <h3 className="text-sm font-medium text-slate-200">{cert.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interests */}
        <section id="interests" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <SectionHeader eyebrow="Beyond Work" title="Personal interests" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {interests.map((it) => (
                <div key={it.title} className="rounded-2xl border border-slate-800 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{it.icon}</span>
                    <h3 className="text-base font-semibold text-white">{it.title}</h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{it.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 bg-slate-900/40 border-t border-slate-800/70">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <SectionHeader eyebrow="Contact" title="Let's build something reliable"
              description="Reach out about platform engineering, AI infrastructure, speaking, or mentoring." />
            <div className="flex flex-wrap justify-center gap-4">
              <a href={`mailto:${personalInfo.email}`}
                 className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition-colors">
                <FaEnvelope /> Email me
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold px-6 py-3 rounded-lg transition-colors">
                <FaLinkedin /> LinkedIn
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold px-6 py-3 rounded-lg transition-colors">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Tokyo, Japan.</p>
          <p>
            Built with React + Tailwind ·{' '}
            <a href="https://github.com/jaykuma007/jaykuma007.github.io" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">Source</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
