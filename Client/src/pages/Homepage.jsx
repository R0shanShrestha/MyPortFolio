import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Aboutme from "../components/Aboutme";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";

const Homepage = ({ data }) => {
  const { nav, homesection, aboutme, blogs, skills, portfolio } = data[0];
  const [totalPrj, setTotalPrj] = useState(portfolio[0].webproject.length);

  return (
    <main className="w-full h-full">
      {/* Hero / Home Section */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
        <Home nav={nav} totalPrj={totalPrj} homesection={homesection} />
      </section>

      {/* About Me Section */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
        <Aboutme data={aboutme} />
      </section>
      
      {/* Skills Section */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
        <Skills />
      </section>

      {/* Portfolio Section */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
        <Portfolio setTotalPrj={setTotalPrj} />
      </section>

      {/* Blogs Section */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
        <Blogs />
      </section>

      {/* Contact Section */}
      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
        <Contact />
      </section>
    </main>
  );
};

export default Homepage;
