"use client";
import React from "react";
import { TracingBeam } from "../ui/tracing-beam";
import Usecase from "../../pages/Usecase";
import Projects from "../../pages/Projects";
import OurTeam from "../../pages/OurTeam";
import ContactUs from "../../pages/ContactUs";
import Hero from "../../pages/Hero";
import OurMission from "../../pages/OurMission";
import Investors from "../../pages/Investers";
import About from "../../pages/AboutUs";
import { Features } from "../../pages/Features";

export function TracingBeamDemo() {
  const pageStyle = { height: '100vh' }; // Define a common style for all pages

  return (
    <div>
      <TracingBeam>
        <div style={pageStyle}><Hero/></div>
        <div style={pageStyle}><About /></div>
        <div style={pageStyle}><Investors /></div>
        <div style={pageStyle}><Features /></div>

        <div style={pageStyle}><Usecase /></div>
        <div style={pageStyle}><OurMission /></div>

        <div style={pageStyle}><Projects /></div>
        ourteam
        <div style={pageStyle}><OurTeam /></div>
        <div style={pageStyle}><ContactUs /></div>
      </TracingBeam>
    </div>
  );
}
