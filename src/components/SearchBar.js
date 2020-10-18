import React from "react";

const SearchBar = ({ handleChange, handleClick, handleKeyPressed }) => {
  const change = (event) => {
    handleChange(event);
  };

  const click = () => {
    handleClick();
  };

  const keyPressed = (event) => {
    handleKeyPressed(event);
  };
  return (
    <>
      <div className="searchWrapper">
        <input
          type="text"
          placeholder="Search"
          onChange={change}
          onKeyPress={keyPressed}
        />
        <button onClick={click}>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </>
  );
};

export default SearchBar;
