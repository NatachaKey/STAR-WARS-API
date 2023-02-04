import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CharactersCard from "./CharactersCard";
import Particless from './Particless';
import dart from "./dart.png";

function App() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  function increment() {
    setPage(page + 1);
  }

  function decrement() {
    setPage(page - 1);
  }

  useEffect(() => {
    setLoading(true);
    axios.get(`https://swapi.dev/api/people/?page=${page}`).then(query => {
      setData(query.data.results);
      console.log(query.data.results);
      setLoading(false);
    });
  }, [page]);

  return (<div className="main">
      <Particless/>
      <div className="header">
           <h1 className="title">Star Wars API</h1> 
           <img src={dart} alt="dartweider"></img>
      </div>
   
      {loading ? <p>Loading...</p> : <CharactersCard  data={data} /> }
      {loading ? null : <p className="showPage">Page: {page}</p>}

      <div className="changePage">
        <button
          className="button"
          disabled={page === 1 ? true : false}
          onClick={decrement}
        >
          Previous
        </button>
        <button className="button" onClick={increment}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;


//retching caracters info in class component with axios library
// import { Component } from 'react';
// import './App.css';

// class App extends Component {
//   state={
//     person: null
//   }

//   async componentDidMount(){
//     const url= "https://swapi.dev/api/people/1/";
//     const response= await fetch(url);
//     const data = await response.json();
//     console.log(data);

//     this.setState({person:data})
//   }
// render(){
//   return <div>
//      {!this.state.person? <p>Loading...</p> :
//      <div>
//       <p>Name: {this.state.person.name}</p>
//       <p>Gender: {this.state.person.gender}</p>
//       <a>Eye color: {this.state.person.eye_color}</a>
//       <p>Height: {this.state.person.height} cm</p>
//      </div>
// }
//   </div>
// }
// }

// export default App;
