import { useState } from "react";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Implement actual form submission logic
    // This could integrate with services like Formspree, Netlify Forms, or EmailJS
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! I will get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary text-xl" />,
      label: "Email",
      value: "ranapravesh30@gmail.com",
      link: "mailto:ranapravesh30@gmail.com"
    },
    {
      icon: <Phone className="text-primary text-xl" />,
      label: "Phone",
      value: "+353 870379117",
      link: "tel:+353870379117"
    },
    {
      icon: <Linkedin className="text-primary text-xl" />,
      label: "LinkedIn",
      value: "linkedin.com/in/pravesh-rana",
      link: "https://linkedin.com/in/pravesh-rana"
    },
    {
      icon: <Github className="text-primary text-xl" />,
      label: "GitHub",
      value: "github.com/pravesh-rana",
      link: "https://github.com/pravesh-rana"
    },
    {
      icon: <MapPin className="text-primary text-xl" />,
      label: "Location",
      value: "Dublin, Ireland",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/10 via-white to-accent/10 print-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Ready to collaborate on data-driven solutions and innovative analytics projects? Let's discuss how I can contribute to your team's success.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{info.label}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-primary hover:text-blue-700 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-gray-600">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Quick Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
