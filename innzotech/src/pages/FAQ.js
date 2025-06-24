import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  ArrowRight,
  Clock,
  Users,
  Shield,
  Zap
} from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqCategories = [
    {
      title: "Services & Implementation",
      icon: <Zap className="h-6 w-6" />,
      questions: [
        {
          question: "What Zoho services do you offer?",
          answer: "We offer complete implementation of Zoho CRM, Zoho Books, Zoho People, Zoho Creator, as well as training, technical support, and custom integration services."
        },
        {
          question: "How long does a Zoho implementation take?",
          answer: "Duration varies based on project complexity. A basic CRM implementation takes 2-4 weeks, while a complete project with multiple modules can take 6-12 weeks."
        },
        {
          question: "Do you offer training for our teams?",
          answer: "Yes, we provide comprehensive training tailored to your specific needs, including group and individual sessions, as well as personalized training materials."
        },
        {
          question: "Can you integrate Zoho with our existing tools?",
          answer: "Absolutely! We specialize in integrations with your existing tools (ERP, marketing tools, payroll systems, etc.) for a seamless user experience."
        }
      ]
    },
    {
      title: "Pricing & Quotes",
      icon: <Shield className="h-6 w-6" />,
      questions: [
        {
          question: "How are your rates calculated?",
          answer: "Our rates are based on project complexity, number of Zoho modules implemented, required integrations, and level of customization needed."
        },
        {
          question: "Do you offer a free audit?",
          answer: "Yes, we offer a free audit of your current processes to identify improvement opportunities and propose an adapted solution."
        },
        {
          question: "Are there hidden costs?",
          answer: "No, we are transparent about our rates. All costs are detailed in our initial quote, including implementation, training, and post-launch support."
        },
        {
          question: "Do you offer monthly packages?",
          answer: "Yes, we offer monthly support and maintenance packages to ensure the smooth operation of your Zoho solutions."
        }
      ]
    },
    {
      title: "Support & Maintenance",
      icon: <Users className="h-6 w-6" />,
      questions: [
        {
          question: "What type of support do you provide?",
          answer: "We offer complete technical support via email, phone, and video conferencing, with a guaranteed 24-hour response time for emergencies."
        },
        {
          question: "Is support included after implementation?",
          answer: "Yes, we include 3 months of free support after implementation, then we offer ongoing support packages."
        },
        {
          question: "Can you help us with Zoho updates?",
          answer: "Absolutely! We assist you with all Zoho updates and test new features for your environment."
        },
        {
          question: "Do you offer preventive maintenance services?",
          answer: "Yes, we offer preventive maintenance services including regular audits, optimizations, and improvement recommendations."
        }
      ]
    },
    {
      title: "Technical & Security",
      icon: <Clock className="h-6 w-6" />,
      questions: [
        {
          question: "Is our data secure?",
          answer: "Yes, Zoho complies with the highest security standards (ISO 27001, SOC 2) and we configure your solutions according to security best practices."
        },
        {
          question: "Can you migrate our existing data?",
          answer: "Yes, we manage the complete migration of your data from existing systems to Zoho, ensuring integrity and continuity."
        },
        {
          question: "Is Zoho compatible with our compliance needs?",
          answer: "Zoho is GDPR compliant and meets many regulations. We help you configure compliance settings specific to your industry."
        },
        {
          question: "What happens in case of technical issues?",
          answer: "Our technical team is available 24/7 for emergencies. We have backup and recovery procedures to minimize disruptions."
        }
      ]
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
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="h-8 w-8 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to your questions about our Zoho services, 
              pricing, and support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-4">
                  {category.questions.map((item, index) => {
                    const itemIndex = `${categoryIndex}-${index}`;
                    const isOpen = openItems[itemIndex];

                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 rounded-lg border border-gray-200"
                      >
                        <button
                          onClick={() => toggleItem(itemIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                        >
                          <span className="font-semibold text-gray-900 pr-4">
                            {item.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-primary-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-primary-600 flex-shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="px-6 pb-4"
                          >
                            <p className="text-gray-600 leading-relaxed">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Can't find your answer?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our team of experts is here to answer all your questions 
              and help you with your Zoho project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Contact us
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
              <Link to="/services" className="btn-secondary inline-flex items-center">
                Discover our services
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ; 