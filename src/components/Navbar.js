import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white transparent">
      <div className="mx-8 px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl text-primary-300 text-opacity-70 font-semibold">
            Thomas Eitniear
          </span>
          <div className="flex space-x-6 text-gray-900">
            <a
              href="#about"
              className="text-xl text-primary-300 text-opacity-70"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-xl text-primary-300 text-opacity-70"
            >
              Work
            </a>
            <a
              href="#testimonials"
              className="text-xl text-primary-300 text-opacity-70"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-xl text-primary-300 text-opacity-70"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
