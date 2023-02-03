import React from "react";
import Films from './Films';

function CardList(props) {
  return (
    <ul className="container">
      {props.data.map((ele, indx) => {
        return (
          <li  key={indx}>
            <p id="name">Name: {ele.name}</p>
            <p>Height: {ele.height} cm</p>
            <p>Mass: {ele.mass} kg </p>
            <p>Hair color: {ele.hair_color}</p>
            <p>Birth year: {ele.birth_year}</p>
            <p> <Films /></p>
          </li>
        );
      })}
    </ul>
  );
}

export default CardList;
