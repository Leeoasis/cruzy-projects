import React from "react";
import Services from "../../assets/images/Plumbing.jpeg"

const RecentProjects = () => {
    return (
        <section className="relative py-20" style={{ backgroundImage: `url(${Services})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center text-white mb-8 animate-slide-in-up">Recent Projects</h2>
          <p className="text-lg text-center text-white mb-12">Take a look at some of our most recent and impactful projects.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/600x400" alt="Project 1" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Project Title 1</h3>
              <p>A brief description of the project showcasing the work done and the results achieved.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/600x400" alt="Project 2" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Project Title 2</h3>
              <p>A brief description of the project showcasing the work done and the results achieved.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/600x400" alt="Project 3" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">Project Title 3</h3>
              <p>A brief description of the project showcasing the work done and the results achieved.</p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default RecentProjects;