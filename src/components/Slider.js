import React, { useState } from "react";
import "../styles/style.css";

const Slider = ({ hits }) => {
  const [x, setX] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(true);
  const [xPointUp, setXPointUp] = useState(0);
  const [xPointDown, setXPointDown] = useState(0);
  const [dragging, setDragging] = useState(false);

  const styles = {
    objectFit: "contain",
  };

  const goLeft = () => {
    x === 0 ? setX(-100 * (hits.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (hits.length - 1) ? setX(0) : setX(x - 100);
  };

  const setFullSize = () => {
    setIsFullScreen(!isFullScreen);
  };

  const handleMouseUp = (event) => {
    setXPointUp(event.clientX);
    setDragging(false);
  };

  const handleMouseMove = (event) => {
    if (dragging) {
      if (xPointDown - event.clientX > 0) {
        goRight();
      } else if (xPointDown - event.clientX < 0) {
        goLeft();
      }
      setDragging(false);
    }
  };

  const handleMouseDown = (event) => {
    setXPointDown(event.clientX);
    setDragging(true);
  };

  if (hits.length === 0) {
    return (
      <h1>
        Looks like something wrong with keyword. Try again with something
        different
      </h1>
    );
  } else {
    return (
      <>
        <div
          className="slider"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div style={{ transform: `translateX(${x}%)` }} className="slide">
            <h1>Test with random html element</h1>
          </div>
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
            &lt;&lt;
          </button>
          <button className="rightBtn" onClick={goRight}>
            &gt;&gt;
          </button>
        </div>
        <hr />

        <div className="dotWrapper">
          {hits.map((url, idx) => (
            <div onClick={() => setX(-100 * idx)} className="dot"></div>
          ))}
        </div>

        <div className="checkBoxWrapper">
          <input onClick={setFullSize} type="checkbox" />
          <label>Full Screen Mode</label>
        </div>
      </>
    );
  }
};

export default Slider;
