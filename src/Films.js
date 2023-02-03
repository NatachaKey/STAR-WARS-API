import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";


function Films() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    setLoading(true);
    axios.get(`https://swapi.dev/api/films/?page=${page}`).then(query => {
      setData(query.data.results);
      console.log(query.data.results);
      setLoading(false);
    });
  }, [page]);

  return ( <ul >
  {data.map((ele, indx) => {
    return (
      <li id="movieStyle" key={indx}>
        <p >Movie title: {ele.title}</p>
        <p>Director: {ele.director}</p>
       </li>
    );
  })}
</ul>
  );
}

export default Films;