import React from "react";
import Navbar from "../../Components/Navbar";
import Services from "../../Components/Services";
import Classes from "../../Components/Classes";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="px-10">
      <Services />
      <Classes />
      </div>
    </div>
  );
}

export default Home;
