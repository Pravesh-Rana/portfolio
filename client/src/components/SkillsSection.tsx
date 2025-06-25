import { Code, Wrench, Users, Database, BarChart3, Cpu, TrendingUp, Brain, Calculator, Target, Layers, GitBranch, Presentation, FileSpreadsheet, Settings, PieChart, Github, Camera } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    { name: "Python", icon: <Code className="text-blue-600 text-lg" /> },
    { name: "SQL", icon: <Database className="text-blue-600 text-lg" /> },
    { name: "Machine Learning", icon: <Brain className="text-blue-600 text-lg" /> },
    { name: "Statistics", icon: <BarChart3 className="text-blue-600 text-lg" /> },
    { name: "OOPs", icon: <Layers className="text-blue-600 text-lg" /> },
    { name: "Data Analysis", icon: <TrendingUp className="text-blue-600 text-lg" /> },
    { name: "Ensemble Methods", icon: <Target className="text-blue-600 text-lg" /> },
    { name: "Clustering", icon: <Cpu className="text-blue-600 text-lg" /> },
    { name: "Predictive Modeling", icon: <Calculator className="text-blue-600 text-lg" /> }
  ];

  const tools = [
    { name: "Tableau", icon: <BarChart3 className="text-green-600 text-lg" /> },
    { name: "Power BI", icon: <PieChart className="text-green-600 text-lg" /> },
    { name: "Excel", icon: <FileSpreadsheet className="text-green-600 text-lg" /> },
    { name: "SAP", icon: <Settings className="text-green-600 text-lg" /> },
    { name: "PowerPoint", icon: <Presentation className="text-green-600 text-lg" /> },
    { name: "Celonis", icon: <GitBranch className="text-green-600 text-lg" /> },
    { name: "GitHub", icon: <Github className="text-green-600 text-lg" /> },
    { name: "CapCut", icon: <Camera className="text-green-600 text-lg" /> }
  ];

  const softSkills = [
    { name: "Teamwork", icon: "🤝" },
    { name: "Attention to Detail", icon: "👁️" },
    { name: "Critical Thinking", icon: "🧠" },
    { name: "Flexibility", icon: "🔄" },
    { name: "Reporting", icon: "📊" },
    { name: "AGILE Methodology", icon: "🚀" }
  ];

  const interests = [
    "Powerlifting", "AI & Technology", "Volunteering", "Video Editing", "Hiking", "Reading"
  ];

  return (
    <section id="skills" className="py-20 bg-white print-section" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
            <div className="flex items-center mb-6">
              <div className="bg-primary p-3 rounded-lg mr-4">
                <Code className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Technical Skills</h3>
            </div>
            
            <div className="space-y-3">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="mr-3">{skill.icon}</span>
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools & Technologies */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
            <div className="flex items-center mb-6">
              <div className="bg-success p-3 rounded-lg mr-4">
                <Wrench className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Tools & Platforms</h3>
            </div>
            
            <div className="space-y-3">
              {tools.map((tool, index) => (
                <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="mr-3">{tool.icon}</span>
                  <span className="text-gray-700 font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100">
            <div className="flex items-center mb-6">
              <div className="bg-purple-600 p-3 rounded-lg mr-4">
                <Users className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Soft Skills</h3>
            </div>
            
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                  <span className="text-purple-600 mr-3 text-lg">{skill.icon}</span>
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Interests:</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
