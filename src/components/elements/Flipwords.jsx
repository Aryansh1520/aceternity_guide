import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Unconvention", "Rare", "Unusual", "modern"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-bold text-white">
        Trade the <FlipWords words={words} /> <br />
        with TanTheta
      </div>
    </div>
  );
}
