import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import SearchBar from "./SearchBar";
import LoadingComponent from "./LoadingComponent";

const App = () => {
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState("");
  const [hits, setHits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //Replace this key by your own
  const key = "18692613-961490bbfdf1b33b886f2171b";
  const api = `https://pixabay.com/api/?key=${key}&q=${query}`;

  const fetchPic = async () => {
    setIsLoading(true);
    const get = await fetch(api);
    const data = await get.json();
    const { hits } = data;
    setHits(hits);
    setIsLoading(false);
  };

  const onClick = () => {
    setUrl(api);
  };

  useEffect(() => {
    fetchPic();
  }, [url]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyPressed = (event) => {
    if (event.key === "Enter") {
      setUrl(api);
    }
  };
  return (
    <>
      {isLoading ? <LoadingComponent /> : <Slider hits={hits} />}

      <SearchBar
        handleChange={handleChange}
        handleClick={onClick}
        handleKeyPressed={handleKeyPressed}
      />
    </>
  );
};

export default App;
