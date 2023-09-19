import React from "react";

function ExampleCarouselImage(props) {
  return (
    <div
      style={{
        height: "65vh",
        marginBottom: "2vh",
        marginTop: "2vh",
      }}
    >
      <img
        style={{ width: "100%", height: "100%" }}
        alt="image one"
        src={props.imageSrc}
      />
    </div>
  );
}

export default ExampleCarouselImage;
