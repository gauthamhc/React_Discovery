import React from "react";

const EventListHeading = (props) => {
  return (
    <div>
      <h2 style={{ color: "#2e26d5", lineSpacing: "2px" }}>{props.heading}</h2>
    </div>
  );
};

export default EventListHeading;
