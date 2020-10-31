import React from "react";
import "./homepage.scss";
import Directory from "../../component/directory/Directory";
import TopBackground from "../../component/Top-Background/TopBackground";

const HomePage = () => {
  return (
    <div className="homepage">
      <TopBackground />
      <Directory />
    </div>
  );
};

export default HomePage;
