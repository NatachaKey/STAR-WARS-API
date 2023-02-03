import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";


function Films() {

  const [data, setData] = useState([]);
 



  useEffect(() => {
    axios.get(`https://swapi.dev/api/films/`).then(query => {
      setData(query.data.results);
     console.log(query.data.results);

    });
  }, []);

  return ( <ul >
  {data.map((ele, indx) => {
    return (
      <li id="movieStyle" key={indx} >
        <p >Movie title: {ele.title}</p>
       
       </li>
    );
  })}
</ul>
  );
}

export default Films;