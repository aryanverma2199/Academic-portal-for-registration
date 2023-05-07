import React from "react";

const ImageRender = ({ imgSrc }) => {
  return (
    <div style={{ width: "100px" }}>
      <img src={imgSrc} />
    </div>
  );
};

export default ImageRender;
