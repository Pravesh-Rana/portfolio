import { Mail, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-12 no-print border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:ranapravesh30@gmail.com" 
              className="text-gray-700 hover:text-black transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/pravesh-rana" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-black transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/pravesh-rana" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-black transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-700 mb-2">© 2024 Pravesh Rana. All rights reserved.</p>
            <p className="text-gray-600 text-sm">
              Business Analytics Professional
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
