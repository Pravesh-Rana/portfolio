import { ChevronDown, Mail, Linkedin, Github, Download } from "lucide-react";
import profileImage from "@assets/Profile_1750842866953_1750864344673.jpg";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-white to-accent/5 pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center fade-in">
          {/* Professional headshot */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-8 rounded-full overflow-hidden shadow-lg">
            <img 
              src={profileImage} 
              alt="Pravesh Rana" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Pravesh Rana
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            MSc Business Analytics Candidate | Data-Driven Problem Solver
          </p>
          
          <p className="text-lg text-gray-700 mb-10 max-w-4xl mx-auto leading-relaxed font-semibold">
            A problem solver at heart, I use data not just to explain the past, but to preempt the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
            >
              View My Work
            </button>
            <a
              href="/api/resume"
              download="Pravesh_Rana_Resume.pdf"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center"
            >
              <Download className="mr-2" size={18} />
              Download Resume
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-10">
            <a 
              href="mailto:ranapravesh30@gmail.com" 
              className="text-gray-600 hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/pravesh-rana" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/pravesh-rana" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bounce-gentle no-print">
            <button
              onClick={() => scrollToSection("about")}
              className="text-primary"
              aria-label="Scroll to about section"
            >
              <ChevronDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
