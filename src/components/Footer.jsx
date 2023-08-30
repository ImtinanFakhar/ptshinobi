import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center md:items-start">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-blue-500">Pentest Shinobi</h1>


        </div>
        <div className="mt-6 md:mt-0">
          <h2 className="text-xl font-semibold mb-4">About Us</h2>
          <p className="mb-2">About Us Content</p>
          <p className="mb-2">Contact Us Content</p>
          <p>Review Us Content</p>
        </div>
        <div className="mt-6 md:mt-0">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">123 Street, City</p>
          <p className="mb-2">Email: contact@example.com</p>
          <p>Phone: +123 456 789</p>
        </div>
        <div className="mt-6 md:mt-0 flex flex-col items-center md:items-start">
          <h2 className="text-xl font-semibold mb-4 ">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-2xl hover:text-blue-400 transition duration-300">Twitter</i>
            </a>
            <a href="https://upwork.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-2xl hover:text-green-400 transition duration-300">Upwork</i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer