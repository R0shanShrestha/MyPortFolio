import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Aboutme from "../components/Aboutme";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Blogs from "../components/Blogs";
import Sideline from "../components/Sideline";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Homepage = ({ data }) => {
  const { nav, homesection, aboutme, portfolio, blogs, skills } = data[0];
  return (
    <main className="px-20    w-full h-full ">
      <section className=" h-full w-full ">
        <Home nav={nav} homesection={homesection} />
        <Skills />
        <Aboutme data={aboutme} />
        <Portfolio />
        {/* <Blogs /> */}
        <Contact />
      </section>
    </main>
  );
};

export default Homepage;
