"use client";
import React from "react";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "2018 Spring",
    cardTitle: "Turned-e Estabish",
    url: "https://www.turned-e.com/",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText:
      "Men of the British Expeditionary Force (BEF) wade out to..",
  },
  {
    title: "2020 Autumn",
    cardTitle: "Science Park Step program",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText:
      "Men of the British Expeditionary Force (BEF) wade out to..",
  },
  {
    title: "2021 Spring",
    cardTitle: "Incu-App",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText:
      "Men of the British Expeditionary Force (BEF) wade out to..",
  },
  {
    title: "2021 Spring",
    cardTitle: "Incu-Tech",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
    cardDetailedText:
      "Men of the British Expeditionary Force (BEF) wade out to..",
  },
];

export default function AboutUsTimeline() {
  return (
    <div className="w-screen flex justify-center">
      <div style={{ width: "800px", height: "950px" }}>
        <Chrono
          items={items}
          mode="VERTICAL_ALTERNATING"
          theme={{
            primary: "#3CEDB7",
            secondary: "#3CEDB7",
            cardBgColor: "#3CEDB7",
            titleColor: "black",
            titleColorActive: "black",
          }}
        />
      </div>
    </div>
  );
}
