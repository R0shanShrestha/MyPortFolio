import React from "react";
import Homepage from "./pages/Homepage";
import assets from "./assets.json";
import "./App.css";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="  border-green-400">
      <Homepage data={assets} />
      <Footer link={assets[0].nav} />

    </div>
  );
};

export default App;
