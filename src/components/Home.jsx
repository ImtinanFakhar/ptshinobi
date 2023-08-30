import React from "react";
import { Link } from "react-router-dom";
import { AiFillBug, AiOutlineCheckSquare } from "react-icons/ai";
import { FaShieldAlt, FaNetworkWired, FaWordpress } from "react-icons/fa";
import Footer from "./Footer";
const Home = () => {
  
    
  return (
    
    <div>
    
      <div className="container my-8 mx-auto flex flex-col justify-center items-center md:items-center bg-scroll ... ">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-black mb-4 text-center">
          Pentest Shinobi
        </h1>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed max-w-prose text-center ...">
          Welcome to Pentest Shinobi, your trusted partner for comprehensive
          cybersecurity services. We specialize in penetration testing,
          vulnerability assessment, and API testing to help businesses like
          yours identify and mitigate potential cyber threats.
        </p>
        <Link
          to="/contact"
          className="mt-6 bg-gray-900 text-white py-2 px-6 rounded-lg text-base md:text-lg lg:text-xl hover:bg-blue-600 transition duration-300"
        >
          Get Started Now
        </Link>
      </div>
      <div className="container mx-auto p-4 mt-1 md:mt-4 text-left">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-center">
          Expertise
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-900 p-4 rounded-lg shadow-md flex flex-col items-center hover:bg-blue-600 transition duration-300 ">
            <FaShieldAlt size={48} color="#00557f" />
            <h2 className="text-xl font-semibold mb-1">
              Vulnerability assessment
            </h2>

            <p class="mb-3  text-gray-500 dark:text-gray-400 text-left...">
              Track work across the enterprise through an open, collaborative
              platform. So your IT support and operations teams can rapidly
              respond to requests, incidents, and changes.
            </p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg shadow-md flex flex-col items-center hover:bg-blue-600 transition duration-300">
            <AiFillBug size={48} color="#00557f" />
            <h2 className="text-xl font-semibold mb-1">
              Web Application Penetration Testing
            </h2>
            <p class="mb-3 text-left text-gray-500 dark:text-gray-400">
              Our team of skilled professionals uses the latest testing
              methodologies and tools to identify vulnerabilities in web
              applications, helping businesses to protect their critical assets
              from cyber threats.
            </p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg shadow-md flex flex-col items-center hover:bg-blue-600 transition duration-300">
            <FaNetworkWired size={48} color="#00557f" />
            <h2 className="text-xl font-semibold mb-1">
              Network Penetration Testing
            </h2>
            <p class="mb-3 text-left text-gray-500 dark:text-gray-400">
              At Pentest Shinobi, we offer expert Network Pentesting services to
              help businesses identify and mitigate potential cyber threats. Our
              team provide you with comprehensive reports and recommendations
              for improving your overall security posture.
            </p>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg shadow-md flex flex-col items-center hover:bg-blue-600 transition duration-300">
            <FaWordpress size={48} color="#00557f" />
            <h2 className="text-xl font-semibold mb-1">
              WordPress Security Audit and Malware Removal
            </h2>
            <p class="mb-3 text-left text-gray-500 dark:text-gray-400">
              As for WordPress Security and Malware Removal, we at Pentest
              Shinobi understand the importance of securing your website and
              ensuring it remains free from malware.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 mt-1 md:mt-4 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-left md:text-right pr-4">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-extrabold mb-4">
              Improve your security posture
            </h1>
          </div>
          <div className="text-left md:text-left">
            <p className="text-xs md:text-lg lg:text-xl leading-relaxed max-w-prose">
              Cyber Security is an applied science that focuses on protecting
              information systems and the networks in which electronic
              communication is made possible. Cyber Security is considered as
              much of an art as a science by the practitioners that provide
              consulting, engineering, and IT security services that reduce risk
              for businesses and government.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 mt-8 md:mt-12  text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-left md:text-right pr-4">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-2">
                <AiOutlineCheckSquare size={20} className="text-white" />
              </div>
              <p className="text-xs md:text-xl lg:text-xl leading-relaxed max-w-prose ml-1">
                Be your trusted compliance and risk program advisor.
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-2">
                <AiOutlineCheckSquare size={20} className="text-white" />
              </div>
              <p className="text-xs md:text-xl lg:text-xl leading-relaxed max-w-prose ml-1">
                Deliver cost-effective technology to reduce enterprise-wide
                risk.
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-2">
                <AiOutlineCheckSquare size={20} className="text-white" />
              </div>
              <p className="text-xs md:text-xl lg:text-xl leading-relaxed max-w-prose ml-1">
                Provide expert consulting services to support IT teams.
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center mr-2">
                <AiOutlineCheckSquare size={20} className="text-white" />
              </div>
              <p className="text-xs md:text-xl lg:text-xl leading-relaxed max-w-prose ml-1">
                Bring information security leadership to enterprises of all
                sizes
              </p>
            </div>
          </div>
          <div className="text-center md:text-left">
            <img
              src="src/assets/lock.jpg"
              alt="Points"
              className="w-full md:w-auto border rounded-lg "
            />
          </div>
        </div>
      </div>
      <div className=" py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Contact Us
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-6">
            Have questions or need assistance? Feel free to get in touch with
            us. We're here to help!
          </p>
          <Link
            to="/Contact"
            className="bg-gray-900 text-white py-2 px-6 rounded-lg text-base md:text-lg lg:text-xl hover:bg-blue-700 transition duration-300"
          >
            Contact Now
          </Link>
        </div>
      </div>
      <Footer />
  </div>
  );
};

export default Home;
