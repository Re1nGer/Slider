import React, { useState } from "react";
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import photo4 from "../images/photo4.jpg";
import photo5 from "../images/photo5.jpg";
import "../styles/style.css";

const Slider = () => {
  const [x, setX] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(true);

  const styles = {
    objectFit: "contain",
  };

  const goLeft = () => {
    x === 0 ? setX(-400) : setX(x + 100);
  };

  const goRight = () => {
    x === -400 ? setX(0) : setX(x - 100);
  };

  const handleClick = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <>
      <div className="slider">
        <div style={{ transform: `translateX(${x}%)` }} className="slide">
          <img style={isFullScreen ? styles : {}} src={photo3}></img>
        </div>
        <div style={{ transform: `translateX(${x}%)` }} className="slide">
          <img style={isFullScreen ? styles : {}} src={photo4}></img>
        </div>
        <div style={{ transform: `translateX(${x}%)` }} className="slide">
          <img style={isFullScreen ? styles : {}} src={photo5}></img>
        </div>
        <div style={{ transform: `translateX(${x}%)` }} className="slide">
          <img style={isFullScreen ? styles : {}} src={photo1}></img>
        </div>
        <div style={{ transform: `translateX(${x}%)` }} className="slide">
          <img style={isFullScreen ? styles : {}} src={photo2}></img>
        </div>
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
        <span onClick={() => setX(0)} className="dot"></span>
        <span onClick={() => setX(-100)} className="dot"></span>
        <span onClick={() => setX(-200)} className="dot"></span>
        <span onClick={() => setX(-300)} className="dot"></span>
        <span onClick={() => setX(-400)} className="dot"></span>
      </div>

      <div className="checkBoxWrapper">
        <input onClick={handleClick} type="checkbox" />
        <label>Full Screen Mode</label>
      </div>
    </>
  );
};

export default Slider;
