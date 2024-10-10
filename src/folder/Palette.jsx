import React from "react";
import { SchemeColor } from "./SchemeColor";
import "../style.css";

export const Palette = ({ paletteData }) => {
  const getOrientationClass = (orientation) => {
    if (orientation === "horizontal") {
      return "palette-scheme palette-scheme--horizontal";
    } else {
      ("palette-scheme palette-scheme--vertical");
    }
  };
  return (
    <div className="palette">
      <div className={getOrientationClass(paletteData.direction)}>
        <img
          className="scheme-image"
          src={paletteData.image}
          alt="Ocean Waves"
        />
        <div className="scheme-colors">
          {paletteData.colors.map((color) => (
            <SchemeColor color={color} key={color} />
          ))}
        </div>
      </div>
      <div className="palette-info">
        <h2>{paletteData.name}</h2>
        <p>{paletteData.description}</p>

        <p>
          Photo by{" "}
          <a href={paletteData.attribution.url} target="_blank">
            {paletteData.attribution.name}
          </a>
          .
        </p>
      </div>
    </div>
  );
};
