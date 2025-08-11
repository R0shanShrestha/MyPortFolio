import React from "react";
import Homepage from "./pages/Homepage";
import assets from "./assets.json";
import "./App.css";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className=" ">
      <Homepage data={assets} />
      <Footer link={assets[0].nav} />
    </div>
  );
};

export default App;
