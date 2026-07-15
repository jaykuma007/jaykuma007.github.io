import React, { useState, useEffect } from 'react';
// IMPORT the image here from its location in the src directory
import JayKImage from './j.jpeg';
// Import clsx for constructing dynamic class names
import clsx from 'clsx'; // <--- NEW: Import clsx

// Type definitions
type SectionType = 'home' | 'professional' | 'academic' | 'personal';

interface JobExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

interface Education {
  degree: string;
  institution: string;
  year: string;
}

interface SkillCategory {
  title: string;
  icon: string;
  items: string[];
}

interface PersonalInterest {
  title: string;
  icon: string;
  description: string;
}

const JayKumarPortfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionType>('home');
  const [imageError, setImageError] = useState<boolean>(false);

  // Data
  const jobExperiences: JobExperience[] = [
    {
      title: "SENIOR MANAGER, MULTI-CLOUD & SECURITY PLATFORM",
      company: "Asahi Group Holding Ltd",
      location: "Tokyo, Japan",
      period: "Sep 2022 - Present",
      responsibilities: [
        "Led Multi-Cloud & Security Platform Engineering, aligning IT strategies with business goals.",
        "Architected and managed hybrid infrastructures across Azure, AWS, GCP, and on-premise.",
        "Directed the build/deployment of low-latency RAG monetization applications and established MLOps.",
        "Oversaw enterprise-wide Identity and Access Management (IAM) and application registration.",
        "Implemented cloud-native tools: Azure Defender, Sentinel, Azure ML, AWS (EKS, ECS), GCP (GKE, BigQuery).",
        "Championed CI/CD automation and drove cost optimization through FinOps practices."
      ]
    },
    {
      title: "HEAD OF CLOUD OPS",
      company: "RAKUTEN MOBILE INC",
      location: "Tokyo, Japan",
      period: "Jan 2019 - Aug 2022",
      responsibilities: [
        "Managed a team of 30 SREs ensuring availability and reliability of the Telco cloud for 4G/5G workloads.",
        "Oversaw Day 2 cloud operations and managed Cisco ACI-based data center infrastructure.",
        "Led critical incident management, conducted root cause analysis, and pioneered Chaos Engineering."
      ]
    }
  ];

  const education: Education[] = [
    {
      degree: "M.S., Artificial Intelligence & Machine Learning",
      institution: "Liverpool John Moores University, UK",
      year: "2023"
    },
    {
      degree: "B.E., Information Technology",
      institution: "University of Rajasthan, INDIA",
      year: "2009"
    }
  ];

  const skillCategories: SkillCategory[] = [
    {
      title: "Key Certifications",
      icon: "🏆",
      items: ["CKA, CKS, TOGAF, PMP, CSM", "Azure (x10), RHCE, OCP, ITIL", "AIPMM Certified Product Manager"]
    },
    {
      title: "Cloud Platforms",
      icon: "☁️",
      items: ["Azure", "AWS", "Google Cloud Platform (GCP)"]
    },
    {
      title: "Architecture & Strategy",
      icon: "🏗️",
      items: ["Solution & Enterprise Architecture (TOGAF)", "Multi-Cloud Strategy & FinOps", "MLOps & AI Infrastructure"]
    },
    {
      title: "Infrastructure & Operations",
      icon: "🖥️",
      items: ["Kubernetes (CKA, CKS)", "Linux / Unix Administration", "CI/CD, DevOps, SRE", "IaC (Terraform, Ansible)"]
    }
  ];

  const personalInterests: PersonalInterest[] = [
    {
      title: "Travel & Culture",
      icon: "✈️",
      description: "Passionate about exploring new cultures, landscapes, and cuisines around the world. Each journey brings fresh perspectives and inspiration for both personal growth and professional innovation."
    },
    {
      title: "AI & Technology",
      icon: "🧠",
      description: "Constantly exploring the latest developments in AI, Large Language Models (LLMs), and Agentic AI. Fascinated by the potential of these technologies to transform industries and solve complex problems."
    },
    {
      title: "Multi-Cloud Innovation",
      icon: "☁️",
      description: "Staying curious about the evolving multi-cloud landscape and automation technologies. Always eager to discover new tools and methodologies that can improve efficiency and scalability."
    },
    {
      title: "Continuous Learning",
      icon: "📚",
      description: "Committed to lifelong learning through technical blogs, research papers, and hands-on experimentation. Believe that staying updated with industry trends is crucial for professional excellence."
    },
    {
      title: "Community & Mentorship",
      icon: "👥",
      description: "Enjoy sharing knowledge with the tech community through mentoring, speaking at conferences, and contributing to open-source projects. Believe in the power of collaboration and knowledge sharing."
    },
    {
      title: "Photography",
      icon: "📷",
      description: "Capturing moments and landscapes through photography, particularly during travels. This hobby enhances attention to detail and provides a creative outlet that complements technical work."
    }
  ];

  const showSection = (section: SectionType): void => {
    setActiveSection(section);
  };

  const handleImageError = (): void => {
    setImageError(true);
  };

  useEffect(() => {
    // This effect handles button animations. It's generally stable.
    const buttons = document.querySelectorAll('.nav-button');
    buttons.forEach(button => {
      const handleMouseEnter = () => {
        (button as HTMLElement).style.transform = 'translateY(-3px) scale(1.02)';
      };
      const handleMouseLeave = () => {
        (button as HTMLElement).style.transform = 'translateY(0) scale(1)';
      };

      button.addEventListener('mouseenter', handleMouseEnter);
      button.addEventListener('mouseleave', handleMouseLeave);

      // A simple cleanup for general event listeners, might be fine for this use case
      // For more complex cleanup with multiple elements, consider storing references to the specific elements
      // and their handlers in a mutable ref or array outside the loop, then cleaning up.
      // But for small number of fixed elements like these nav buttons, this is likely okay.
      return () => {
        button.removeEventListener('mouseenter', handleMouseEnter);
        button.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []); // Empty dependency array ensures this runs once after the initial render

  const renderJob = (job: JobExperience, index: number) => (
    <div key={index} className="group relative bg-gradient-to-br from-white/95 to-blue-50/80 p-8 rounded-2xl border border-blue-100/50 mb-8 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>

      {/* Job title and company with enhanced styling */}
      <div className="relative z-10 mb-4">
        <h3 className="text-2xl font-bold text-slate-800 mb-3 leading-tight">
          {job.title}
        </h3>
        <div className="flex items-center gap-3 mb-3">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition-shadow duration-300">
            {job.company}
          </span>
          <div className="flex items-center gap-2 text-slate-600 bg-slate-100/80 px-3 py-1 rounded-full">
            <span className="text-blue-600">📍</span>
            <span className="font-medium">{job.location}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-slate-600 bg-emerald-50 px-3 py-1 rounded-full inline-flex">
          <span className="text-emerald-600">📅</span>
          <span className="font-medium">{job.period}</span>
        </div>
      </div>

      {/* Responsibilities with enhanced styling */}
      <div className="relative z-10">
        <h4 className="text-lg font-semibold text-slate-700 mb-4 flex items-center gap-2">
          <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm">✓</span>
          Key Achievements
        </h4>
        <ul className="space-y-3">
          {job.responsibilities.map((responsibility, idx) => (
            <li key={idx} className="flex items-start group/item">
              <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white text-xs font-bold mr-4 mt-0.5 group-hover/item:scale-110 transition-transform duration-200">
                {idx + 1}
              </span>
              <span className="text-slate-700 leading-relaxed group-hover/item:text-slate-800 transition-colors duration-200">
                {responsibility}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30"></div>
    </div>
  );

  const renderSkillCategory = (category: SkillCategory, index: number) => (
    <div key={index} className="bg-white/90 p-6 rounded-xl border-t-3 border-green-500 backdrop-blur-sm">
      <h4 className="text-slate-800 font-semibold mb-4 flex items-center gap-2">
        <span>{category.icon}</span>
        {category.title}
      </h4>
      <ul className="space-y-2">
        {category.items.map((item, idx) => (
          <li key={idx} className="text-slate-700">{item}</li>
        ))}
      </ul>
    </div>
  );

  const renderPersonalInterest = (interest: PersonalInterest, index: number) => (
    <div key={index} className="bg-white/90 p-6 rounded-xl border-t-3 border-purple-500 backdrop-blur-sm">
      <h4 className="text-slate-800 font-semibold mb-4 flex items-center gap-2">
        <span>{interest.icon}</span>
        {interest.title}
      </h4>
      <p className="text-slate-700">{interest.description}</p>
    </div>
  );

  return (
    // Outer container for centering the entire portfolio card
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 flex items-center justify-center p-8">
      {/* Main portfolio card container */}
      <div className="bg-white/95 backdrop-blur-3xl rounded-3xl p-12 shadow-2xl max-w-2xl w-full text-center border border-white/20 overflow-auto">
        {/* Added overflow-auto to allow scrolling if content exceeds height, preventing clipping */}

        {/* Home Section */}
        {activeSection === 'home' && (
          <div className="animate-fade-in">
            {/* Profile Image */}
            <div className="mb-8">
              {!imageError ? (
                <img
                  src={JayKImage} // <--- USE THE IMPORTED IMAGE VARIABLE HERE
                  alt="Jay Kumar"
                  className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
                  onError={handleImageError}
                />
              ) : (
                // Fallback for image error
                <div className="w-36 h-36 rounded-full mx-auto bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-4xl font-bold border-4 border-white shadow-lg">
                  JK
                </div>
              )}
            </div>

            {/* Header Info */}
            <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Jay Kumar
            </h1>
            <p className="text-xl font-medium text-slate-600 mb-4">
              Senior Manager – Multi-Cloud Platform Architect
            </p>
            <div className="flex items-center justify-center gap-2 text-lg text-slate-600 mb-8">
              <span>📍</span>
              <span>Tokyo, Japan • +81 9078097890</span>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-12 p-6 bg-white/70 rounded-2xl backdrop-blur-sm">
              <a href="mailto:jay.choubey007@gmail.com" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1">
                <span>📧</span>
                <span>jay.choubey007@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/jayk007" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1">
                <span>🔗</span>
                <span>linkedin.com/in/jayk007</span>
              </a>
              <a href="https://github.com/jaykuma007" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all duration-300 hover:-translate-y-1">
                <span>💻</span>
                <span>github.com/jaykuma007</span>
              </a>
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <button
                onClick={() => showSection('professional')}
                className="nav-button bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-w-[250px] justify-center"
              >
                <span>💼</span>
                Professional Experience
              </button>
              <button
                onClick={() => showSection('academic')}
                className="nav-button bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-w-[250px] justify-center"
              >
                <span>🎓</span>
                Academic & Certifications
              </button>
              <button
                onClick={() => showSection('personal')}
                className="nav-button bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-w-[250px] justify-center"
              >
                <span>❤️</span>
                Personal Interests
              </button>
            </div>
          </div>
        )}

        {/* Professional Experience Section */}
        {activeSection === 'professional' && (
          <div className="animate-fade-in text-left">
            <button
              onClick={() => showSection('home')}
              className="bg-white/20 border-2 border-white/30 text-slate-700 px-6 py-3 rounded-xl mb-6 hover:bg-white/30 hover:-translate-x-1 transition-all duration-300"
            >
              ← Back to Home
            </button>
            <h2 className="text-3xl font-bold text-blue-600 mb-8 flex items-center gap-3">
              <span>💼</span>
              Professional Experience
            </h2>

            {jobExperiences.map((job, index) => renderJob(job, index))}

            {/* Previous Experience with enhanced styling */}
            <div className="group relative bg-gradient-to-br from-white/95 to-slate-50/80 p-8 rounded-2xl border border-slate-200/50 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-600/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-500 via-blue-500 to-indigo-500"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-gradient-to-r from-slate-600 to-blue-600 rounded-full flex items-center justify-center text-white">
                    📚
                  </span>
                  Previous Experience
                </h3>

                <div className="grid gap-6">
                  {[
                    {
                      title: "Technical Services Specialist, UNIX/HPC",
                      company: "IBM",
                      period: "2015-2017",
                      description: "Led UNIX/Linux admin for SAP ECC; expert in Veritas Cluster, Oracle RAC, and IaC (Ansible/Terraform).",
                      color: "from-blue-600 to-blue-700"
                    },
                    {
                      title: "Asst. Manager, BUILD PLATFORM",
                      company: "SAMSUNG",
                      period: "2013-2015",
                      description: "Managed Linux servers, storage (HP 3PAR, NetApp), and CI/CD tools (Perforce, Jenkins, JFrog).",
                      color: "from-indigo-600 to-purple-600"
                    },
                    {
                      title: "Sr. Analyst, UNIX/LINUX PLATFORM/HPC",
                      company: "HCL",
                      period: "2011-2013",
                      description: "SME for RHEL/AIX/HP-UX; led Data Center design (HLD/LLD) and BCP/DR drills.",
                      color: "from-purple-600 to-pink-600"
                    },
                    {
                      title: "NOC ENGINEER",
                      company: "CMC LTD (TCS)",
                      period: "2010-2011",
                      description: "Configured Cisco network hardware for core banking systems.",
                      color: "from-emerald-600 to-teal-600"
                    }
                  ].map((role, idx) => (
                    <div key={idx} className="bg-white/70 p-6 rounded-xl border border-white/50 hover:bg-white/90 transition-all duration-300 hover:shadow-md">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h4 className="font-bold text-slate-800 text-lg">{role.title}</h4>
                        {/* Corrected class string construction using clsx */}
                        <span className={clsx(
                            `bg-gradient-to-r`,
                            role.color,
                            `text-white`,
                            `px-3`,
                            `py-1`,
                            `rounded-full`,
                            `text-sm`,
                            `font-semibold`,
                            `shadow-sm`
                        )}>
                          {role.company}
                        </span>
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">
                          {role.period}
                        </span>
                      </div>
                      <p className="text-slate-700 leading-relaxed">{role.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-30"></div>
            </div>
          </div>
        )}

        {/* Academic & Certifications Section */}
        {activeSection === 'academic' && (
          <div className="animate-fade-in text-left">
            <button
              onClick={() => showSection('home')}
              className="bg-white/20 border-2 border-white/30 text-slate-700 px-6 py-3 rounded-xl mb-6 hover:bg-white/30 hover:-translate-x-1 transition-all duration-300"
            >
              ← Back to Home
            </button>
            <h2 className="text-3xl font-bold text-green-600 mb-8 flex items-center gap-3">
              <span>🎓</span>
              Academic & Certifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Education */}
              <div className="bg-white/90 p-6 rounded-xl border-t-3 border-green-500 backdrop-blur-sm">
                <h4 className="text-slate-800 font-semibold mb-4 flex items-center gap-2">
                  <span>🏛️</span>
                  Education
                </h4>
                {education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <strong className="text-slate-800">{edu.degree}</strong>
                    <br />
                    <span className="text-slate-600">{edu.institution} ({edu.year})</span>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div className="bg-white/90 p-6 rounded-xl border-t-3 border-green-500 backdrop-blur-sm">
                <h4 className="text-slate-800 font-semibold mb-4 flex items-center gap-2">
                  <span>🌍</span>
                  Languages
                </h4>
                <ul className="space-y-2 text-slate-700">
                  <li>🇬🇧 English (Advanced)</li>
                  <li>🇯🇵 Japanese (Elementary)</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => renderSkillCategory(category, index))}
            </div>
          </div>
        )}

        {/* Personal Interests Section */}
        {activeSection === 'personal' && (
          <div className="animate-fade-in text-left">
            <button
              onClick={() => showSection('home')}
              className="bg-white/20 border-2 border-white/30 text-slate-700 px-6 py-3 rounded-xl mb-6 hover:bg-white/30 hover:-translate-x-1 transition-all duration-300"
            >
              ← Back to Home
            </button>
            <h2 className="text-3xl font-bold text-purple-600 mb-8 flex items-center gap-3">
              <span>❤️</span>
              Personal Interests
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalInterests.map((interest, index) => renderPersonalInterest(interest, index))}
            </div>
          </div>
        )}
      </div>
      {/* The <style jsx> block comment is intentionally left here as a reminder that it was removed. */}
    </div>
  );
};

export default JayKumarPortfolio;
