import React from 'react';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav
      className=" flex flex-wrap items-center justify-between px-2 py-3 mb-3
    absolute top-0 left-0 right-0 z-10 bg-white transparent"
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-primary-50"
            href="#"
          >
            Tommy Eitniear
          </a>
          <button
            className="text-primary-50 cursor-pointer text-xl leading-none px-3 py-1 block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6 text-primary-50"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center' +
            (navbarOpen ? ' flex' : ' hidden')
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-primary-50 hover:opacity-75"
                href="#about"
              >
                <i className="fab fa-facebook-square text-lg leading-lg text-primary-50 opacity-75"></i>
                <span className="ml-2">About</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-primary-50 hover:opacity-75"
                href="#work"
              >
                <i className="fab fa-twitter text-lg leading-lg text-primary-50 opacity-75"></i>
                <span className="ml-2">Work</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-primary-50 hover:opacity-75"
                href="#testimonials"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-primary-50 opacity-75"></i>
                <span className="ml-2">Testimonials</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-lg uppercase font-bold leading-snug text-primary-50 hover:opacity-75"
                href="#contact"
              >
                <i className="fab fa-twitter text-lg leading-lg text-primary-50 opacity-75"></i>
                <span className="ml-2">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  // return (
  //   <nav className="absolute top-0 left-0 right-0 z-10 bg-white transparent">
  //     <div className="mx-8 px-4">
  //       <div className="flex items-center justify-between h-16 ">
  //         <span className="text-xl text-primary-50 text-opacity-70 font-semibold">
  //           Thomas Eitniear
  //         </span>
  //         <div className="flex space-x-6 text-gray-900">
  //           <a
  //             href="#about"
  //             className="text-xl text-primary-50 text-opacity-70"
  //           >
  //             About
  //           </a>
  //           <a
  //             href="#projects"
  //             className="text-xl text-primary-50 text-opacity-70"
  //           >
  //             Work
  //           </a>
  //           <a
  //             href="#testimonials"
  //             className="text-xl text-primary-50 text-opacity-70"
  //           >
  //             Testimonials
  //           </a>
  //           <a
  //             href="#contact"
  //             className="text-xl text-primary-50 text-opacity-70"
  //           >
  //             Contact
  //           </a>
  //         </div>
  //       </div>
  //     </div>
  //   </nav>
  // );
}
