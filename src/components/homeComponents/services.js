import React from "react";
import Services from "../../assets/images/Plumbing.jpeg"

const HomeServices = () => {
    return (
<section className="relative py-20" style={{ backgroundImage: `url(${Services})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-8 text-white animate-slide-in-up">Our Services</h2>
          <p className="text-lg text-center mb-12 text-white">Explore our range of services designed to meet all your needs.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="bg-white text-orange-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4">Plumbing</h3>
              <p>Expert plumbing solutions for residential and commercial properties, ensuring reliability and efficiency.</p>
            </div>
            <div className="bg-white text-orange-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4">Roofing</h3>
              <p>High-quality roofing services to protect your property and enhance its value.</p>
            </div>
            <div className="bg-white text-orange-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4">Tiling</h3>
              <p>Professional tiling services for a sleek and modern look in any space.</p>
            </div>
            <div className="bg-white text-orange-700 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4">Waterproofing</h3>
              <p>Effective waterproofing solutions to safeguard your property from water damage.</p>
            </div>
          </div>
        </div>
      </section>

    )
}

export default HomeServices;