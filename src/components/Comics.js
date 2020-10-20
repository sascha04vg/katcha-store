import React from "react";
const Comics = ({ comicsToRender }) => {return (
    <ul>
      {comicsToRender.map((comic, index) => (
        <li key={index}>
          <strong>{comic.title}</strong>
          <img style={{width:"10%"}}src={comic.src} alt={comic.title}/>
        </li>
      ))}
    </ul>
  );
};
export default Comics;