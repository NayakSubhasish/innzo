import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  BarChart3, 
  BookOpen, 
  Code, 
  Settings,
  Zap,
  Shield,
  Headphones,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Zoho CRM",
      subtitle: "Customer Relationship Management",
      description: "Optimize your sales and improve customer satisfaction with a complete and personalized CRM solution.",
      features: [
        "Custom sales pipeline configuration",
        "Business process automation",
        "Integration with your existing tools",
        "Complete team training",
        "Dedicated technical support",
        "Continuous performance optimization"
      ],
      benefits: [
        "+45% increase in conversions",
        "-30% sales cycle time",
        "Complete visibility on sales activity",
        "Improved customer satisfaction"
      ],
      color: "bg-blue-50 text-blue-600",
      bgColor: "bg-blue-500"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Zoho Books",
      subtitle: "Accounting and Finance",
      description: "Simplify your accounting with a complete solution integrating invoicing, reports, and banking management.",
      features: [
        "Chart of accounts configuration",
        "Automated invoicing",
        "Automatic bank integration",
        "Custom financial reports",
        "Multi-currency management",
        "Tax compliance"
      ],
      benefits: [
        "-60% administrative time",
        "Reduced accounting errors",
        "Real-time cash flow visibility",
        "Guaranteed regulatory compliance"
      ],
      color: "bg-green-50 text-green-600",
      bgColor: "bg-green-500"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Zoho People",
      subtitle: "Human Resources Management",
      description: "Digitize your HR processes with a complete solution covering the entire employee lifecycle.",
      features: [
        "Recruitment and onboarding management",
        "Performance evaluation",
        "Leave and absence management",
        "Training and development",
        "Payroll and benefits",
        "HR legal compliance"
      ],
      benefits: [
        "+30% HR efficiency",
        "Reduced administrative tasks",
        "Improved employee engagement",
        "Simplified legal compliance"
      ],
      color: "bg-purple-50 text-purple-600",
      bgColor: "bg-purple-500"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Zoho Creator",
      subtitle: "Custom Applications",
      description: "Develop custom applications to automate your specific business processes.",
      features: [
        "Business needs analysis",
        "Custom application design",
        "Integration with Zoho and third-party systems",
        "Intuitive user interfaces",
        "Workflow automation",
        "Maintenance and evolution"
      ],
      benefits: [
        "Optimized business processes",
        "Reduced manual tasks",
        "Adaptability to changes",
        "Fast and measurable ROI"
      ],
      color: "bg-orange-50 text-orange-600",
      bgColor: "bg-orange-500"
    }
  ];

  const additionalServices = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Training & Support",
      description: "Complete team training and continuous technical support to maximize adoption."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Integrations",
      description: "Connect Zoho with your existing tools for a seamless user experience."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Automation",
      description: "Automate your business processes to improve operational efficiency."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security & Compliance",
      description: "Secure configuration and compliance with current regulations."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Zoho Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Complete solutions to digitize and optimize all your business processes. 
              Our expertise guarantees successful implementation and fast ROI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-gray-700 font-medium">50+ projects completed</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700 font-medium">98% client satisfaction</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Headphones className="h-5 w-5 text-blue-500" />
                <span className="text-gray-700 font-medium">24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`inline-flex items-center space-x-3 ${service.color} px-4 py-2 rounded-full mb-6`}>
                    {service.icon}
                    <span className="font-medium">{service.subtitle}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Included Features</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Expected Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 ${service.bgColor} rounded-full flex-shrink-0`}></div>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center btn-primary"
                  >
                    Request a quote
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 h-full">
                    <div className={`w-20 h-20 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional services to maximize the success of your digital transformation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to start your project?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contact us for a free audit of your processes and receive 
              a personalized proposal for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-block">
                Request free quote
              </Link>
              <Link to="/contact" className="border border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-block">
                Schedule a meeting
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services; 