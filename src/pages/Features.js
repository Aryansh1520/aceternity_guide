import React from "react";
import { Chrono } from "react-chrono";

export const Features = () => {
  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to...",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to safety amid enemy fire."
    },
    {
      title: "August 1942",
      cardTitle: "Battle of Stalingrad",
      cardSubtitle: "The turning point of the war in Europe...",
      cardDetailedText: "The turning point of the war in Europe took place at Stalingrad."
    },
    {
      title: "June 1944",
      cardTitle: "D-Day",
      cardSubtitle: "Allied forces launch a massive invasion...",
      cardDetailedText: "Allied forces launch a massive invasion at Normandy."
    },
    {
      title: "May 1945",
      cardTitle: "VE Day",
      cardSubtitle: "Victory in Europe is declared.",
      cardDetailedText: "Victory in Europe is declared, ending the war in Europe."
    },
    {
      title: "August 1945",
      cardTitle: "Hiroshima",
      cardSubtitle: "The first atomic bomb is dropped.",
      cardDetailedText: "The first atomic bomb is dropped on Hiroshima."
    },
    {
      title: "September 1945",
      cardTitle: "End of WWII",
      cardSubtitle: "World War II officially ends.",
      cardDetailedText: "World War II officially ends with Japan's surrender."
    }
  ];

  return (
    <div>
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        disableToolbar
        scrollable
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.7)", // Adjusted opacity
              backdropFilter: "blur(10px)", // Optional: adds a blur effect behind the card
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" // Optional: adds a shadow
            }}
          >
            <h2>{item.cardTitle}</h2>
            <p>{item.cardSubtitle}</p>
            <p>{item.cardDetailedText}</p>
          </div>
        ))}
      </Chrono>
    </div>
  );
};
