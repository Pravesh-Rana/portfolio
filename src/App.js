import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

// --- UPDATED ICON IMPORTS ---
import { FaPython, FaDatabase, FaChartBar, FaBrain, FaFileExcel, FaGithub, FaReact, FaCertificate, FaAward, FaUsers, FaChartArea, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiSap } from 'react-icons/si';

import './App.css';

// --- Reusable Animated Component for Scroll Animations ---
const AnimatedSection = ({ children, animationClass }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div ref={ref} className={`animate-on-scroll ${animationClass} ${inView ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

// --- Standard Page Components ---

const Header = () => (
  <header className="header">
    <a href="#home" className="logo">Pravesh Rana</a>
    <nav className="navbar">
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#education">Education</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

// --- UPDATED HOME COMPONENT WITH NEW ICONS ---
const Home = () => (
  <section id="home" className="home">
    <img src="/profile-photo.jpg" alt="Pravesh Rana" className="home-img" />
    <div className="home-text">
      <h1>Pravesh Rana</h1>
      <div className="subtitle">Business Analyst | Specializing in AI & Process Optimization</div>
      <p className="tagline">A problem solver at heart, I use data not just to explain the past, but to preempt the future.</p>
      <div className="home-buttons">
        <a href="#contact" className="btn">Get In Touch</a>
        <a href="#experience" className="btn">View My Work</a>
        <a href="/Pravesh_Rana_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">Download Resume</a>
      </div>
      <div className="home-socials">
        {/* --- ICONS HAVE BEEN REPLACED HERE --- */}
        <a href="mailto:ranapravesh30@gmail.com" aria-label="Email"><FaEnvelope /></a>
        <a href="https://www.linkedin.com/in/pravesh-rana/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com/Pravesh-Rana" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about">
    <AnimatedSection animationClass="animate-fade-up">
      <h2>About Me</h2>
      <p>My journey began in Electronics & Communication Engineering, where I developed a deep appreciation for complex systems. However, I quickly realized my true passion lies in a different kind of system: the ecosystem of a business.</p>
      <p>This passion led me to pursue a Master's in Business Analytics at University College Dublin. Today, I bridge the gap between technical data science and strategic business objectives. My goal is always the same: <strong>to use data to tell a story and drive intelligent action.</strong></p>
    </AnimatedSection>
  </section>
);

const WorkExperience = ({ experiences }) => (
    <section id="experience">
      <h2>Work Experience</h2>
      <div className="timeline-container">
        {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <AnimatedSection animationClass={index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}>
                <div className="timeline-content">
                  <h3>{exp.title}</h3>
                  <div className="card-subtitle">{exp.company} | {exp.duration}</div>
                  <p>{exp.description}</p>
                  <div className="project-tags">{exp.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}</div>
                </div>
              </AnimatedSection>
            </div>
        ))}
      </div>
    </section>
);

const Projects = ({ projects }) => (
  <section id="projects">
    <h2>Projects</h2>
    <div className="project-grid">{projects.map((project, index) => (
      <AnimatedSection key={index} animationClass="animate-fade-up">
        <div className="card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Result:</strong> {project.outcome}</p>
          <div className="card-footer">
            <div className="project-tags">
              {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
            </div>
            <div className="project-links">
              {project.powerBiLink && (
                <a href={project.powerBiLink} target="_blank" rel="noopener noreferrer" className="project-link powerbi-link">
                  View Dashboard
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github-link">
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>
    ))}</div>
    <div className="other-projects-container">
        <AnimatedSection animationClass="animate-fade-up">
            <a href="https://github.com/Pravesh-Rana" target="_blank" rel="noopener noreferrer" className="btn btn-solid">
                View All Projects
            </a>
        </AnimatedSection>
    </div>
  </section>
);

const Education = ({ education }) => (
    <section id="education">
      <h2>Education</h2>
      <div className="education-grid">
        {education.map((edu, index) => (
          <AnimatedSection key={index} animationClass="animate-fade-up">
            <div className="card education-card">
              <h3>{edu.institution}</h3>
              <p className="degree">{edu.degree}</p>
              <p className="secondary-text-color">{edu.duration}</p>
              <div className="project-tags">{edu.modules.map(mod => <span key={mod} className="tag">{mod}</span>)}</div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
);

const Skills = () => (
  <section id="skills">
    <AnimatedSection animationClass="animate-fade-up">
      <h2>Skills & Certifications</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h4>Technical Skills</h4>
          <ul>
            <li><FaPython /> Python (OOPs)</li>
            <li><FaDatabase /> SQL & Databases</li>
            <li><FaChartBar /> Statistics & Data Analysis</li>
            <li><FaBrain /> Machine Learning</li>
            <li><FaFileExcel /> Financial Modelling</li>
          </ul>
        </div>
        <div className="skill-category">
          <h4>Tools & Platforms</h4>
          <ul>
            <li><FaChartArea /> Power BI & Microsoft Fabric</li>
            <li><FaFileExcel /> Tableau & Excel</li>
            <li><SiSap /> SAP & Celonis</li>
            <li><FaGithub /> GitHub & React</li>
          </ul>
        </div>
        <div className="skill-category">
          <h4>Certifications</h4>
          <ul>
            <li><FaCertificate /> Fabric Analytics Engineer (In Progress)</li>
            <li><FaAward /> UCD Global Leadership Programme</li>
            <li><FaAward /> McKinsey Forward Program</li>
            <li><FaUsers /> Bloomberg Market Concepts</li>
          </ul>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

const ExtraCurricular = ({ activities }) => (
    <section id="extracurricular">
      <h2>Leadership & Initiatives</h2>
      <div className="extracurricular-grid">
        {activities.map((act, index) => (
          <AnimatedSection key={index} animationClass="animate-fade-up">
            <div className="card extracurricular-card">
              <h3>{act.role}</h3>
              <p>{act.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <section id="contact">
      <AnimatedSection animationClass="animate-fade-up">
        <h2>Get In Touch</h2>
        <p className="contact-intro">Have a question or want to work together? Leave your details below, and I'll get back to you as soon as possible.</p>
        <form className="contact-form" action="https://formspree.io/f/YOUR_UNIQUE_ID" method="POST">
          <div className="form-group"><label htmlFor="name">Name</label><input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} /></div>
          <div className="form-group"><label htmlFor="email">Email</label><input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} /></div>
          <div className="form-group"><label htmlFor="message">Message</label><textarea id="message" name="message" rows="5" required value={formData.message} onChange={handleChange}></textarea></div>
          <button type="submit" className="btn submit-btn">Send Message</button>
        </form>
      </AnimatedSection>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2025 Pravesh Rana. All rights reserved.</p>
  </footer>
);

// --- DATA ARRAYS ---
const workExperienceData = [
    { title: "Capstone Project", company: "Deloitte", duration: "May 2025 - Aug 2025", description: "Designed a dual-component solution integrating a Gen-AI web app and a Microsoft Fabric dashboard for national ESG teams, enabling real-time waste analytics to meet Ireland's 2025 sustainability targets.", tags: ["Gen-AI", "MS Fabric", "Power BI", "Python", "Architecture"] },
    { title: "AI Model Training Executive", company: "Outlier (Freelance)", duration: "Dec 2024 - Apr 2025", description: "Contributed as a freelance AI model trainer, enhancing generative models through rigorous code evaluation, feedback, and optimization cycles to improve performance and accuracy.", tags: ["Generative AI", "Model Evaluation", "Code Review", "Freelance"] },
    { title: "Business Analyst", company: "Shree Construction Company", duration: "Dec 2023 - July 2024", description: "Conducted data-driven analysis to optimize project costs and resource allocation. Managed tenders, securing 3 high-value contracts worth $2M+ and enhancing project profitability by almost 15%.", tags: ["Data Analysis", "Financial Modelling", "Cost Optimization"] },
    { title: "Analyst Intern", company: "Emerzin Media", duration: "Jul 2023 – Nov 2023", description: "Designed data visualization dashboards to track real-time sales performance, contributing to surpassing sales goals by 30%. Revised e-commerce marketing strategy using targeted Google Ads.", tags: ["Data Visualization", "Sales Analytics", "Digital Marketing", "Google Ads"] },
];
const projectsData = [
    { title: "US Flights Decision Support System", description: "Engineered a dynamic data model using DAX and Power Query to process 1M+ flight records, enabling decision-makers to explore patterns by airline, route, and time period.", outcome: "Delivered actionable insights on delay causes and high-risk routes, supporting data-driven scheduling and resource allocation.", tags: ["Power BI", "DAX", "Power Query", "Data Modeling"], githubLink: "", powerBiLink: "https://app.powerbi.com/view?r=eyJrIjoiNmZhMjE2YzYtZTY3Yi00ZDBiLWI5NDQtZWQxYmNmMzQ5MTFmIiwidCI6IjQyMGVjNTg5LWE4NjYtNGFkMC05YTU3LWU2MDQ5ZTBkM2JjMCIsImMiOjh9" },
    { title: "Fraud Transaction Identification", description: "Developed a classification model to detect fraudulent transactions using supervised learning.", outcome: "Achieved over 80% accuracy and increased detection precision by 15% via hyperparameter tuning on a 240K+ transaction dataset.", tags: ["ML", "Python", "Classification"], githubLink: "https://github.com/Pravesh-Rana", powerBiLink: "" },
    { title: "Big Mart Sales Prediction", description: "Developed a linear regression model in Python to predict sales for Big Mart.", outcome: "The model achieved a prediction accuracy of over 85%, providing valuable insights for inventory management.", tags: ["ML", "Python", "Regression"], githubLink: "https://github.com/Pravesh-Rana", powerBiLink: "" },
    { title: "SAP ByDesign Implementation", description: "Led a full-cycle Order-to-Cash (O2C) process simulation using SAP ByDesign.", outcome: "Gained hands-on experience in ERP workflows, encompassing sales orders, invoicing, inventory, and financial reconciliation.", tags: ["SAP", "ERP", "Business Process"], githubLink: "", powerBiLink: "" },
];
const educationData = [
    { institution: "University College Dublin", degree: "MSc. Business Analytics", duration: "Sept 2024 - Aug 2025", modules: ["Statistics", "Python", "Business Decisions", "Technology Consulting", "Optimization"] },
    { institution: "Bharati Vidyapeeth's College of Engineering", degree: "B.Tech. Electronics & Communication Engineering", duration: "Aug 2020 - July 2024", modules: ["Digital Communication", "Adhoc Networks", "VLSI Design", "Microwave Engineering"] }
];
const extraCurricularData = [
    { role: "Operations Executive at TEDx", description: "Coordinated a 25-member team to successfully organize the TED Talk 2023 event." },
    { role: "Published Researcher", description: "Published a research paper on 'Storing Healthcare Records Using Blockchain' and presented it at a conference." },
    { role: "Teacher Assistant & Mentor", description: "Mentored 10 students during summer training at Brain Mentors Pvt. Ltd." }
];

// --- MAIN APP ---
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <WorkExperience experiences={workExperienceData} />
        <Projects projects={projectsData} />
        <Education education={educationData} />
        <Skills />
        <ExtraCurricular activities={extraCurricularData} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;