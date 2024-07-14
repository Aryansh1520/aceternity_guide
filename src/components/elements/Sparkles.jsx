"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";

export function SparklesPreview({ name = "Your Name", textSize = "text-3xl lg:text-5xl" }) {
  return (
    <div className="h-[12rem] w-[25rem] flex flex-col items-center justify-center overflow-hidden rounded-full">
      <h1 className={`${textSize} font-bold text-center text-white relative z-20`}>
        {name}
      </h1>
      <div className="w-[20rem] h-20 relative">
        {/* Gradients */}
        <div className="absolute inset-x-8 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-8 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-16 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-16 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(175px_100px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
