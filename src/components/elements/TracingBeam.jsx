"use client";
import React from "react";
import { TracingBeam } from "../ui/tracing-beam";
import Usecase from "../../pages/Usecase";
import Projects from "../../pages/Projects";
import OurTeam from "../../pages/OurTeam";
import ContactUs from "../../pages/ContactUs";

export function TracingBeamDemo() {
  return (
    <div>
      <TracingBeam >
        <Usecase />

        <Projects />

        <OurTeam />

        <ContactUs />

      </TracingBeam>

    </div>
  );
}
