import React, { useState, useEffect } from "react";

import Comics from "./Comics";
import comics from "../comics";
const comicsPerPage = 1;
let arrayForHoldingComics = [];

const Comiclist = () => {
  const [comicsToShow, setComicsToShow] = useState([]);
  const [next, setNext] = useState(1);

  const loopWithSlice = (start, end) => {
    const slicedComics = comics.slice(start, end);
    arrayForHoldingComics = [...arrayForHoldingComics, ...slicedComics];
    setComicsToShow(arrayForHoldingComics);
  };

  useEffect(() => {
    loopWithSlice(0, comicsPerPage);
  }, []);

  const handleNextComic = () => {
    loopWithSlice(next);
    setNext(next);
  };

  const handlePreviousComic = () => {
    loopWithSlice(next);
    setNext(next);
  };

  return (
    <div>
      <Comics comicsToRender={comicsToShow} />
      <button onClick={handlePreviousComic}>Previous</button>
      <button onClick={handleNextComic}>Next</button>
    </div>
  );
};

export default Comiclist;
