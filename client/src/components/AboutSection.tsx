import { MapPin, Phone } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-neutral print-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="slide-up">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Summary</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I am an MSc Business Analytics candidate with comprehensive experience in leveraging Python, SQL, Tableau, and Power BI 
              to drive data-driven business transformation. My expertise spans across machine learning, statistical analysis, and 
              business intelligence, with a proven track record of delivering actionable insights for operational optimization.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              With hands-on experience in dynamic environments, I excel at collaborating with global teams and engaging diverse 
              stakeholders effectively. My passion lies in using advanced analytics and machine learning to solve complex business 
              problems sustainably while contributing to innovative, high-impact solutions.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-3">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span className="font-medium">Location</span>
                </div>
                <p className="text-gray-600">Dublin, Ireland</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-3">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <span className="font-medium">Phone</span>
                </div>
                <p className="text-gray-600">+353 870379117</p>
              </div>
            </div>
          </div>
          
          <div className="slide-up">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Education</h3>
            
            {/* MSc Education */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">MSc. Business Analytics</h4>
                  <p className="text-primary font-medium">University College Dublin</p>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Sept 2024 – Aug 2025</span>
              </div>
              <p className="text-gray-700 text-sm mb-3">Key Modules:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Statistics</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Python Programming</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Business Decision Systems</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Technology Consulting</span>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">Business Optimization</span>
              </div>
            </div>
            
            {/* B.Tech Education */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">B.Tech. Electronics & Communication</h4>
                  <p className="text-primary font-medium">Bharati Vidyapeeth's College of Engineering</p>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Aug 2020 - July 2024</span>
              </div>
              <p className="text-gray-700 text-sm mb-3">Key Modules:</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">Digital Communication</span>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">Engineering Mathematics</span>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">Signals & Systems</span>
                <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">VLSI Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
