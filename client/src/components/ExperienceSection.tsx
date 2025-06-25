import { Briefcase, TrendingUp, CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Business Analyst",
      company: "Shree Construction Company",
      period: "Dec 2023 - July 2024",
      icon: <Briefcase className="text-white text-sm" />,
      bgColor: "bg-primary",
      achievements: [
        "Conducted data-driven analysis to optimize construction project costs and resource allocation, improving efficiency",
        "Managed tender submissions and filed competitive quotations, securing 3 high-value contracts worth $2M+ within a year",
        "Assisted in financial forecasting and budgeting to enhance project profitability by almost 15% and cost control"
      ],
      position: "right"
    },
    {
      title: "Analyst Intern",
      company: "Emerzin Media",
      period: "Jul 2023 – Nov 2023",
      icon: <TrendingUp className="text-white text-sm" />,
      bgColor: "bg-accent",
      achievements: [
        "Designed data visualization dashboards that tracked real-time sales performance against projections, facilitating prompt strategic adjustments that contributed to surpassing sales goals by 30%",
        "Revised marketing strategy for e-commerce and digital retailing using targeted Google Ads"
      ],
      position: "left"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white print-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          {experiences.map((experience, index) => (
            <div key={index} className={`relative mb-12 md:mb-16 ${index === experiences.length - 1 ? 'mb-0' : ''}`}>
              <div className="flex items-center mb-4">
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 ${experience.bgColor} rounded-full border-4 border-white shadow-lg flex items-center justify-center`}>
                  {experience.icon}
                </div>
              </div>
              
              <div className="ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-8">
                <div className={`${experience.position === 'right' ? 'md:text-right md:pr-8' : 'md:col-start-2 md:pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                    <div className={`flex ${experience.position === 'right' ? 'md:justify-end' : ''} items-start justify-between mb-4`}>
                      <div className={experience.position === 'right' ? 'md:text-right' : ''}>
                        <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>
                        <p className={`font-medium ${experience.bgColor === 'bg-primary' ? 'text-primary' : 'text-accent'}`}>
                          {experience.company}
                        </p>
                      </div>
                      <span className={`text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full ${experience.position === 'right' ? 'ml-4 md:ml-0 md:mr-4' : 'ml-4'}`}>
                        {experience.period}
                      </span>
                    </div>
                    
                    <ul className="space-y-3 text-gray-700">
                      {experience.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <CheckCircle className="text-success mr-3 mt-1 flex-shrink-0 w-4 h-4" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
