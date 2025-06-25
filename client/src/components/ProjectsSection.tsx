import { TrendingUp, Shield, Settings, Users, Database, UserCheck, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Big Mart Sales Prediction",
      description: "Developed a linear regression model in Python to predict Big Mart sales with over 85% accuracy. Automated data pipeline reducing processing time by 60%.",
      icon: <TrendingUp className="text-primary text-xl" />,
      iconBg: "bg-blue-100",
      category: "Machine Learning",
      tags: ["Python", "Linear Regression", "Data Pipeline", "Real-time Dashboard"],
      metric: "85% Prediction Accuracy",
      metricIcon: "target",
      imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400&h=200&fit=crop&crop=center"
    },
    {
      title: "Fraud Transaction Detection",
      description: "Built a classification model to detect fraudulent transactions with 80% accuracy using supervised learning on 240K+ transactions dataset.",
      icon: <Shield className="text-red-600 text-xl" />,
      iconBg: "bg-red-100",
      category: "Classification",
      tags: ["Python", "Classification", "Hyperparameter Tuning", "240K+ Records"],
      metric: "15% Precision Improvement",
      metricIcon: "percentage",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop&crop=center"
    },
    {
      title: "SAP ByDesign Implementation",
      description: "Led full-cycle Order-to-Cash process implementation using SAP ByDesign, including sales orders, invoicing, and financial reconciliation.",
      icon: <Settings className="text-yellow-600 text-xl" />,
      iconBg: "bg-yellow-100",
      category: "ERP Implementation",
      tags: ["SAP ByDesign", "O2C Process", "ERP Workflows", "Real-time Analytics"],
      metric: "Full-Cycle Implementation",
      metricIcon: "sync",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop&crop=center"
    },
    {
      title: "Instagram Clone Database",
      description: "Designed and implemented a comprehensive database structure for a social media platform using SQL with optimized queries and relationships.",
      icon: <Database className="text-purple-600 text-xl" />,
      iconBg: "bg-purple-100",
      category: "Database Design",
      tags: ["SQL", "Database Design", "Query Optimization"],
      metric: "Relational Database",
      metricIcon: "database",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop&crop=center"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-neutral print-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Showcasing my expertise in machine learning, data analysis, and business intelligence through real-world applications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${project.iconBg} p-3 rounded-lg`}>
                    {project.icon}
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-2 py-1 rounded text-sm ${
                        tagIndex % 4 === 0 ? 'bg-blue-50 text-blue-700' :
                        tagIndex % 4 === 1 ? 'bg-green-50 text-green-700' :
                        tagIndex % 4 === 2 ? 'bg-purple-50 text-purple-700' :
                        'bg-orange-50 text-orange-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-4 h-4 mr-2">
                    {project.metricIcon === 'target' && <div className="w-full h-full rounded-full border-2 border-current"></div>}
                    {project.metricIcon === 'percentage' && <span className="text-sm font-bold">%</span>}
                    {project.metricIcon === 'sync' && <div className="w-full h-full border-2 border-current rounded-full border-dashed animate-spin"></div>}
                    {project.metricIcon === 'pie-chart' && <div className="w-full h-full bg-current rounded-full"></div>}
                    {project.metricIcon === 'database' && <div className="w-full h-full bg-current rounded"></div>}
                    {project.metricIcon === 'search' && <div className="w-full h-full border-2 border-current rounded-full"></div>}
                  </div>
                  <span>{project.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* GitHub Repository Link */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/pravesh-rana" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            <Github className="mr-3" size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
