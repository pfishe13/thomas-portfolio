import React from 'react';
import highlightTommyLogo from '../images/tommylogo.png';
import jjlogo from '../images/jjlogo.png';

export default function About() {
  return (
    <section id="about" className="h-screen bg-background-light">
      <div className="container mx-auto flex px-10 py-40 md:flex-row flex-col items-center bg-background-light">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            I'm Tommy.
            <br className="hidden lg:inline-block" /> A content creator located
            in Toledo, OH.
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Highlight Tommy Logo"
            src={highlightTommyLogo}
          />
          <img
            className="object-cover object-center rounded"
            alt="JJ Sports Logo"
            src={jjlogo}
          />
        </div>
      </div>
    </section>
  );
}
