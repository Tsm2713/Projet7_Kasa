import React from "react";
import "./banner.scss";

function Banner({ image, text }) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)), url(${image})`,
      }}
    >
      {text && <h1>{text}</h1>}
    </div>
  );
}

export default Banner;
