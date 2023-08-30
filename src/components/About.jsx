import React from 'react'

const About = () => {
  return (
    <div className=" py-10">
    <div className="container mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-center">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src="/src/assets/Pentest.jpg" alt="About Us" className="w-full h-auto rounded-lg" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-lg mb-4">
            At Pentest Shinobi, we are committed to providing top-notch cybersecurity solutions for businesses of all sizes. Our team of skilled professionals specializes in penetration testing, vulnerability assessment, and API testing.
          </p>
          <p className="text-lg mb-4">
            With years of experience in the industry, we have helped numerous clients secure their digital assets and protect sensitive information from cyber threats. Our approach is tailored to your specific needs, ensuring that you have a robust cybersecurity strategy in place.
          </p>
          <p className="text-lg mb-4">
            Whether you are a small startup or a large enterprise, our goal is to help you stay one step ahead of cybercriminals. Your security is our priority, and we are dedicated to delivering the highest level of expertise and professionalism in the field of cybersecurity.
          </p>
          <p className="text-lg mb-8">
            Contact us today to learn more about how we can safeguard your business against evolving cyber risks.
          </p>
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold mb-4">Why Choose Us</h2>
            <ul className="list-disc pl-6">
              <li className="mb-2">Experienced team of cybersecurity professionals</li>
              <li className="mb-2">Comprehensive penetration testing and vulnerability assessment</li>
              <li className="mb-2">Customized solutions to meet your specific needs</li>
              <li className="mb-2">Constantly evolving strategies to combat cyber threats</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About