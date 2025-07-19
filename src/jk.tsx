import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronLeft, FaChevronRight, FaCloudUploadAlt, FaRocket, FaShieldAlt, FaBrain, FaTwitter, FaFacebook } from 'react-icons/fa';

// --- Data Structures ---
interface JobExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

interface SkillCategory {
    title: string;
    items: string[];
}

interface Interest {
    icon: string;
    title: string;
    description: string;
}

// --- THIS IS NEW: Data for Certifications ---
interface Certification {
    logo: string;
    title: string;
}

// Data for the Hero Slider
const heroSlides = [
    { line1: "I'm a", highlight: "Multi-Cloud Platform Architect", subtitle: "Designing and deploying scalable, secure, and resilient cloud infrastructures." },
    { line1: "I build solutions as a", highlight: "Backend Engineer", subtitle: "Focusing on high-performance, robust APIs and microservices." },
    { line1: "I specialize in", highlight: "AI HPC Solution Architecture", subtitle: "Engineering high-throughput systems for complex computational workloads." }
];

const Portfolio: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide(prev => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide(prev => (prev === 0 ? heroSlides.length - 1 : prev - 1));

  useEffect(() => {
      const slideTimer = setInterval(nextSlide, 7000); 
      return () => clearInterval(slideTimer);
  }, []);

  // --- YOUR DATA ---
  const personalInfo = {
    name: "Jay Kumar",
    title: "Multi-Cloud Platform Architect",
    location: "Tokyo, Japan",
    email: "jay.choubey007@gmail.com",
    linkedin: "https://linkedin.com/in/jayk007",
    github: "https://github.com/jaykuma007",
    twitter: "https://x.com/jaychoubey",
    facebook: "https://www.facebook.com/jay.choubey007/",
    summary: "A results-driven Senior Manager and Multi-Cloud Platform Architect with extensive experience leading teams and engineering high-performance, secure, and reliable cloud infrastructures. Passionate about leveraging AI and multi-cloud solutions to solve complex challenges.",
  };

  const jobExperiences: JobExperience[] = [ { title: 'SENIOR MANAGER, MULTI-CLOUD & SECURITY PLATFORM', company: 'Asahi Group Holding Ltd', period: 'Sep 2022 - Present', location: 'Tokyo, Japan', responsibilities: [ 'Led Multi-Cloud & Security Platform Engineering, aligning IT strategies with business goals.' ] }, { title: 'HEAD OF CLOUD OPS', company: 'RAKUTEN MOBILE INC', period: 'Jan 2019 - Aug 2022', location: 'Tokyo, Japan', responsibilities: [ 'Managed a team of 30 SREs ensuring availability and reliability of the Telco cloud for 4G/5G workloads.' ] }, { title: 'SR SRE OCI COMPUTE', company: 'Oracle Corporation', period: '2017 - 2019', location: 'India', responsibilities: [ 'Managed and optimized Oracle Cloud Infrastructure (OCI) compute resources as a Site Reliability Engineer.' ] }, { title: 'Technical Services Specialist, UNIX/HPC', company: 'IBM', period: '2015 - 2017', location: 'India', responsibilities: [ 'Managed diverse UNIX platforms (Oracle Solaris, HP-UX, IBM AIX) as Lead Administrator.' ] }, { title: 'Asst. Manager, BUILD PLATFORM', company: 'SAMSUNG', period: '2013 - 2015', location: 'India', responsibilities: [ 'Led a team in managing Linux servers and storage systems (SAN/NAS), optimizing resource utilization and system efficiency.' ] }, { title: 'Sr. Analyst, UNIX/LINUX PLATFORM/HPC', company: 'HCL', period: '2011 - 2013', location: 'India', responsibilities: [ 'Served as a Subject Matter Expert (SME) for RHEL/AIX/HP-UX in mission-critical environments.' ] }, { title: 'NOC ENGINEER', company: 'CMC LTD (TCS)', period: '2010 - 2011', location: 'India', responsibilities: [ 'Configured Cisco network hardware (Routers, Switches, ASA/PIX, IPS/IDS) for core banking systems across PAN India.' ] }, ];
  
  const services = [
    { icon: <FaCloudUploadAlt />, title: "Cloud Modernisation", description: "Upgrading legacy systems to scalable, efficient cloud-native architectures." },
    { icon: <FaRocket />, title: "Digital Transformation", description: "Leveraging technology to innovate business models and unlock new digital value." },
    { icon: <FaShieldAlt />, title: "Cybersecurity", description: "Implementing robust security strategies to protect data, apps, and infrastructure." },
    { icon: <FaBrain />, title: "AI Solutions", description: "Architecting and deploying AI & MLOps solutions to solve complex business challenges." },
  ];
    
  const skillCategories: SkillCategory[] = [
    { title: "Cloud Platforms", items: ["Azure", "AWS", "OCI", "GCP"] },
    { title: "DevOps & Automation", items: ["Infrastructure as Code", "Terraform", "Ansible", "CI/CD"] },
    { title: "Containerization & MLOps", items: ["Kubernetes", "Docker", "MLOps"] },
    { title: "Core Infrastructure", items: ["Linux / Unix", "HPC / AI Infrastructure", "Enterprise Storage (SDS)", "Enterprise Networking"] },
    { title: "Programming", items: ["Python", "Go", "Bash"] },
    { title: "Strategy & Solutions", items: ["Cloud Modernisation", "Digital Transformation", "Cybersecurity", "AI Solutions"] },
  ];

  // --- THIS DATA ARRAY IS NEW ---
  const certifications: Certification[] = [
    { logo: '/logos/logo-redhat.png', title: 'Red Hat Certified OpenShift Administrator' },
    { logo: '/logos/logo-togaf.png', title: 'TOGAF® Enterprise Architecture Practitioner' },
    { logo: '/logos/logo-k8s.png', title: 'Certified Kubernetes Administrator (CKA)' },
    { logo: '/logos/logo-cks.png', title: 'Certified Kubernetes Security Specialist (CKS)' },
    { logo: '/logos/logo-microsoft.png', title: 'Microsoft Certified: Azure Solutions Architect Expert' },
    { logo: '/logos/logo-microsoft.png', title: 'Microsoft Certified: DevOps Engineer Expert' },
    { logo: '/logos/logo-ibm.png', title: 'IBM Certified: AIX 7 Administrator' },
    { logo: '/logos/logo-redhat.png', title: 'Red Hat Certified: OpenStack Expert' },
    { logo: '/logos/logo-redhat.png', title: 'Red Hat Certified Engineer (RHCE)' },
  ];
  
  const personalInterests: Interest[] = [
    { icon: '✈️', title: 'Travel & Culture', description: 'Passionate about exploring new cultures, landscapes, and cuisines around the world. Each journey brings fresh perspectives and inspiration.' },
    { icon: '🧠', title: 'AI & Technology', description: 'Constantly exploring the latest developments in AI, Large Language Models (LLMs), and Agentic AI. Fascinated by their potential.' },
    { icon: '☁️', title: 'Multi-Cloud Innovation', description: 'Staying curious about the evolving multi-cloud landscape and automation technologies. Eager to discover new tools and methodologies.' },
    { icon: '📚', title: 'Continuous Learning', description: 'Committed to lifelong learning through technical blogs, research papers, and hands-on experimentation. Staying updated is crucial.' },
    { icon: '👥', title: 'Community & Mentorship', description: 'Enjoy sharing knowledge with the tech community through mentoring, speaking at conferences, and contributing to open-source projects.' },
    { icon: '📷', title: 'Photography', description: 'Capturing moments and landscapes through photography, particularly during travels. This hobby enhances attention to detail.' },
  ];

  return (
    <div className="bg-white text-gray-700 font-sans">

      {/* --- HEADER / NAVIGATION --- */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-rose-500 hover:text-rose-600 transition-colors">
            {personalInfo.name}
          </a>
          {/* --- THIS NAVIGATION IS UPDATED --- */}
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-rose-500 transition-colors">About Me</a>
            <a href="#services" className="hover:text-rose-500 transition-colors">Services</a>
            <a href="#experience" className="hover:text-rose-500 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-rose-500 transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-rose-500 transition-colors">Certifications</a> {/* <-- NEW LINK */}
            <a href="#interests" className="hover:text-rose-500 transition-colors">Interests</a>
            <a href="#contact" className="hover:text-rose-500 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        {/* --- Hero Section --- */}
        <section id="home" className="relative h-screen flex items-center justify-center bg-cover bg-center text-white" 
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop')` }}>
            <div className="absolute inset-0 bg-black/70" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
            <div className="relative z-10 text-center p-4">
                <h1 className="text-4xl md:text-6xl font-light uppercase tracking-wider">{heroSlides[currentSlide].line1} <span className="font-bold text-cyan-400">{heroSlides[currentSlide].highlight}</span></h1>
                <p className="mt-4 text-lg md:text-xl text-gray-300">{heroSlides[currentSlide].subtitle}</p>
                <div className="mt-8 space-x-4">
                    <a href="#skills" className="bg-white text-black font-bold py-3 px-6 rounded-sm hover:bg-gray-200 transition-all">Check My Skills</a>
                    <a href="#contact" className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-sm hover:bg-white hover:text-black transition-all">Contact Me</a>
                </div>
            </div>
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><FaChevronLeft size={24} /></button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><FaChevronRight size={24} /></button>
        </section>

        {/* --- About Me Section --- */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3"><img src="/j.jpeg" alt={personalInfo.name} className="rounded-lg shadow-2xl w-full" /></div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-800">Hi, I'm Jay Kumar</h3>
                <h4 className="text-lg text-rose-600 mt-1">{personalInfo.title}</h4>
                <p className="mt-4 leading-relaxed">{personalInfo.summary}</p>
                <div className="mt-6 flex space-x-4">
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rose-500"><FaLinkedin size={24} /></a>
                    <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rose-500"><FaTwitter size={24} /></a>
                    <a href={personalInfo.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rose-500"><FaFacebook size={24} /></a>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-rose-500"><FaGithub size={24} /></a>
                    <a href={`mailto:${personalInfo.email}`} className="text-gray-600 hover:text-rose-500"><FaEnvelope size={24} /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Services Section --- */}
        <section id="services" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">My Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="text-center p-8 bg-gray-50 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className="text-rose-500 text-5xl mb-4 inline-block">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* --- Experience Section --- */}
        <section id="experience" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Work Experience</h2>
                <div className="relative border-l-2 border-rose-500 ml-4 md:ml-0">
                    {jobExperiences.map((job, index) => (
                        <div key={index} className="mb-10 ml-8">
                            <span className="absolute -left-[11px] flex items-center justify-center w-6 h-6 bg-rose-500 rounded-full ring-8 ring-white"></span>
                            <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
                            <h4 className="font-semibold text-md text-gray-700">{job.company} - {job.location}</h4>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">{job.period}</time>
                            <p className="text-base font-normal text-gray-600">{job.responsibilities[0]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        {/* --- Skills Section --- */}
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">My Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b-2 border-rose-400 pb-2">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill, skillIndex) => (<span key={skillIndex} className="bg-rose-100 text-rose-800 text-sm font-medium px-3 py-1 rounded-full">{skill}</span>))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* --- THIS ENTIRE SECTION IS NEW --- */}
        <section id="certifications" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Licenses & Certifications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                            <img src={cert.logo} alt={`${cert.title} logo`} className="w-16 h-16 mr-4 object-contain flex-shrink-0" />
                            <h3 className="text-md font-semibold text-gray-700">{cert.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* --- Personal Interests Section --- */}
        <section id="interests" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Personal Interests</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {personalInterests.map((interest, index) => (
                        <div key={index} className="text-center p-8 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            <span className="text-5xl mb-4 inline-block">{interest.icon}</span>
                            <h3 className="text-xl font-bold mb-2 text-gray-800">{interest.title}</h3>
                            <p className="text-gray-600">{interest.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* --- Contact Section --- */}
        <section id="contact" className="py-20 bg-gray-800 text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
                <p className="max-w-2xl mx-auto mb-8">Feel free to reach out for collaborations or just a friendly hello!</p>
                <div className="flex justify-center items-center flex-wrap gap-8">
                    <div className="flex items-center gap-3"><FaEnvelope className="text-cyan-400" size={24}/><a href={`mailto:${personalInfo.email}`} className="hover:text-cyan-400 transition-colors">{personalInfo.email}</a></div>
                    <div className="flex items-center gap-3"><FaLinkedin className="text-cyan-400" size={24}/><a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn Profile</a></div>
                    <div className="flex items-center gap-3"><FaTwitter className="text-cyan-400" size={24}/><a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Twitter / X Profile</a></div>
                    <div className="flex items-center gap-3"><FaFacebook className="text-cyan-400" size={24}/><a href={personalInfo.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Facebook Profile</a></div>
                    <div className="flex items-center gap-3"><FaGithub className="text-cyan-400" size={24}/><a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub Profile</a></div>
                </div>
            </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="container mx-auto px-6 text-center">
            <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
