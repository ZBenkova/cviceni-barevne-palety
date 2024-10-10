import React from "react";
import { SchemeColor } from "./SchemeColor";
import "../style.css";

export const Palette = ({ paletteData }) => {
  return (
    <div className="palette">
      <div className="palette-scheme palette-scheme--horizontal">
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
    </div>
  );
};
