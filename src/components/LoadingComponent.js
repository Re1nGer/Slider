import React from "react";

const LoadingComponent = () => {
  const loadingStyles = {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 2,
    cursor: "pointer",
  };
  return (
    <div style={loadingStyles}>
      <h1>Loading...</h1>
    </div>
  );
};

export default LoadingComponent;
