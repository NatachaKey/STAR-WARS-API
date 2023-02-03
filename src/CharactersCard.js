import React from "react";

function CardList(props) {
  return (
    <ul className="container">
      {props.data.map((ele, indx) => {
        return (
          <li  key={indx}>
            <p id="name">Name: {ele.name}</p>
            <p>Height: {ele.height}</p>
            <p>Mass: {ele.mass}</p>
            <p>Hair color: {ele.hair_color}</p>
            <p>Birth year: {ele.birth_year}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default CardList;