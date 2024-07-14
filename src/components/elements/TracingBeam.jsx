"use client";
import React from "react";
import { TracingBeam } from "../ui/tracing-beam";
import Usecase from "../../pages/Usecase";
import Projects from "../../pages/Projects";
import OurTeam from "../../pages/OurTeam";
import ContactUs from "../../pages/ContactUs";
import Hero from "../../pages/Hero";

export function TracingBeamDemo() {
  const pageStyle = { height: '100vh' }; // Define a common style for all pages

  return (
    <div>
      <TracingBeam>
        <div style={pageStyle}><Hero/></div>
        <div style={pageStyle}><Usecase /></div>
        <div style={pageStyle}><Projects /></div>
        <div style={pageStyle}><OurTeam /></div>
        <div style={pageStyle}><ContactUs /></div>
      </TracingBeam>
    </div>
  );
}
