import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Works from "./components/Works";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import data from "./data.json";
const App = () => {
  
  return (
    <div className="no-scroller h-screen bg-black/85 text-white  overflow-x-hidden">
      <video
        src="../public/video/bg.mp4"
        className="fixed top-0 left-0 -z-10 w-screen h-screen object-cover"
        muted
        autoPlay
        loop
      />
      {/* Navbar */}
      <Navbar className='hi' />

      {/* Hero */}
      <Home  />

      {/* My Works */}
      <Works  />

      {/* About me */}
      <Aboutme  />

      {/* Skills */}
      <Skills  />

      {/* Block */}
      <Blogs />

      {/* Footer */}
      <Footer link={data.nav.links} />
    </div>
  );
};

export default App;
