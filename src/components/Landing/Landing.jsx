import React from "react";
import Slider from "../Slider/Slider";
import MainLanding from "../MainLanding/MainLanding";
import Banner from "../Banner/Banner";
import Style from "./Landing.module.css";

export default function Landing() {
  return (
    <div>
      <Slider />
      <div className={Style.gradientBackground}>
        <br />
        <MainLanding />
        <Banner />
        <br />
      </div>
    </div>
  );
}
