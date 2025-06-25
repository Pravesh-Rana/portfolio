import { Award, Star, Bot, Mic, FileText, Presentation } from "lucide-react";

export default function CertificationsSection() {
  const certifications = [
    {
      title: "Microsoft Certified: Fabric Analytics Engineer Associate",
      status: "In Progress",
      icon: <div className="bg-blue-100 p-3 rounded-lg mr-4"><Award className="text-blue-600 text-xl" /></div>
    },
    {
      title: "McKinsey Forward Program",
      status: "Completed",
      icon: <div className="bg-green-100 p-3 rounded-lg mr-4"><Award className="text-green-600 text-xl" /></div>
    },
    {
      title: "Bloomberg Market Concepts",
      status: "Completed",
      icon: <div className="bg-yellow-100 p-3 rounded-lg mr-4"><Award className="text-yellow-600 text-xl" /></div>
    }
  ];

  const achievements = [
    {
      title: "AI Model Trainer - Outlier AI",
      description: "Contributed as freelance AI model trainer, enhancing generative models through code evaluation and feedback",
      icon: <Bot className="text-purple-600 text-xl" />,
      iconBg: "bg-purple-100"
    },
    {
      title: "TEDx Operations Executive",
      description: "Coordinated a 25-member team to organize TEDx Talk 2023 event, demonstrating leadership and project management skills",
      icon: <Mic className="text-red-600 text-xl" />,
      iconBg: "bg-red-100"
    },
    {
      title: "Published Research",
      description: "Published research paper on \"Storing Healthcare Records Using Blockchain\" and presented at academic conference",
      icon: <FileText className="text-green-600 text-xl" />,
      iconBg: "bg-green-100"
    },
    {
      title: "Teaching Assistant & Mentor",
      description: "Mentored 10 students during summer training at Brain Mentors Pvt. Ltd., showcasing teaching and mentorship abilities",
      icon: <Presentation className="text-blue-600 text-xl" />,
      iconBg: "bg-blue-100"
    }
  ];

  return (
    <section className="py-20 bg-neutral print-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Certifications & Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Award className="text-primary mr-3" />
              Certifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center">
                    {cert.icon}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{cert.title}</h4>
                      <p className="text-gray-600">{cert.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Key Achievements */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Star className="text-primary mr-3" />
              Key Achievements
            </h3>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className={`${achievement.iconBg} p-3 rounded-lg mr-4 mt-1`}>
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h4>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
