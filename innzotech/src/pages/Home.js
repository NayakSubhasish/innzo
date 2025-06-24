import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  BarChart3, 
  BookOpen, 
  Code, 
  CheckCircle, 
  ArrowRight,
  Star,
  Award,
  Clock
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Zoho CRM",
      description: "Optimized customer relationship management with personalized processes and intelligent automation.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Zoho Books",
      description: "Simplified accounting with detailed financial reports and automatic bank integration.",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Zoho People",
      description: "Complete HR management: recruitment, evaluation, payroll, and talent development.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Zoho Creator",
      description: "Custom applications developed specifically for your unique business needs.",
      color: "bg-orange-50 text-orange-600"
    }
  ];

  const benefits = [
    "Fast and efficient implementation",
    "Complete team training",
    "Dedicated technical support",
    "Custom integrations",
    "Continuous process optimization",
    "Measurable and guaranteed ROI"
  ];

  const stats = [
    { number: "50+", label: "Projects completed", icon: <Award className="h-6 w-6" /> },
    { number: "98%", label: "Client satisfaction", icon: <Star className="h-6 w-6" /> },
    { number: "24h", label: "Response time", icon: <Clock className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Transform your business with{' '}
                <span className="text-primary-600">Zoho</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Expert Zoho consulting and implementation services by Innzotech Solutions. We help you 
                digitize your processes to optimize productivity and accelerate growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary text-center">
                  Start your project
                </Link>
                <Link to="/services" className="btn-secondary text-center">
                  Discover our services
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Optimized CRM</h3>
                      <p className="text-gray-600">+45% conversion rate</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Simplified Accounting</h3>
                      <p className="text-gray-600">-60% administrative time</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Digital HR</h3>
                      <p className="text-gray-600">+30% efficiency</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Zoho Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete solutions to digitize and optimize all your business processes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why choose Innzotech Solutions?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Our expertise and personalized approach guarantee the success 
                of your digital transformation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-primary-600 mb-3 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
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
              Ready to transform your business?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contact us for a free audit of your processes and discover 
              how Zoho can revolutionize your way of working.
            </p>
            <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-block">
              Get started now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 