import React, { useState } from "react";
import "../styles/style.css";

const Slider = ({ hits }) => {
  const [x, setX] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(true);

  const styles = {
    objectFit: "contain",
  };

  const goLeft = () => {
    x === 0 ? setX(-100 * (hits.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (hits.length - 1) ? setX(0) : setX(x - 100);
  };

  const handleClick = () => {
    setIsFullScreen(!isFullScreen);
  };

  if (hits.length === 0) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <div className="slider">
          {hits.map((url, idx) => (
            <div
              key={idx}
              className="slide"
              style={{ transform: `translateX(${x}%)` }}
            >
              <img style={isFullScreen ? styles : {}} src={url.largeImageURL} />
            </div>
          ))}
        </div>

        <div className="btnWrapper">
          <button className="leftBtn" onClick={goLeft}>
            <i className="fas fa-angle-double-left"></i>
          </button>
          <button className="rightBtn" onClick={goRight}>
            <i className="fas fa-angle-double-right"></i>
          </button>
        </div>

        <div className="dotWrapper">
          {hits.map((url, idx) => (
            <div onClick={() => setX(-100 * idx)} className="dot"></div>
          ))}
        </div>

        <div className="checkBoxWrapper">
          <input onClick={handleClick} type="checkbox" />
          <label>Full Screen Mode</label>
        </div>
      </>
    );
  }
};

export default Slider;
