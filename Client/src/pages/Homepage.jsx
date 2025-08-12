import React, { useState } from "react";
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
  const { nav, homesection, aboutme, blogs, skills, portfolio } = data[0];
  const [totalPrj, setTotalPrj] = useState(portfolio[0].webproject.length);
  return (
    <main className="px-20    w-full h-full ">
      <section className=" h-full w-full ">
        <Home nav={nav} totalPrj={totalPrj} homesection={homesection} />
        <Aboutme data={aboutme} />
        <Portfolio setTotalPrj={setTotalPrj} />
        <Blogs />
        <Skills />
        <Contact />
      </section>
    </main>
  );
};

export default Homepage;
