import React from "react";
import WhyImage from "../../assets/images/why.jpeg"

const ContactUs = () => {
    return (
        <section className="relative bg-gray-100 py-20" style={{ backgroundImage: `url(${WhyImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-olive-green-gradient opacity-60"></div>

    <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6 text-white animate-slide-in-up">Get In Touch</h2>
        <p className="text-lg mb-6 text-white">Have any questions or want to start a project with us? Reach out today!</p>
        <a href="#contact" className="bg-white text-olive-700 font-semibold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition-colors duration-300">
        <span className="inline-block mr-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block">
            <path d="M12 3v12l8 4V9l-8-4z" fill="currentColor" />
            </svg>
        </span>
        Contact Us
        </a>
    </div>
</section>
    )
}

export default ContactUs;