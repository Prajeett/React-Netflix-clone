import '../src/App.css'
import React from 'react';
import Row from "./Row";
import requests from './requests';



function App() {
  return (
    <div className="App">
      <h1>ho</h1>
    <Row title = 'NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixoriginals}/>

    <Row title = 'Trending Now'fetchUrl={requests.fetchTrending
    }/>
        <Row title = 'Top Rated'fetchUrl={requests.fetchTopRated
    }/>
        <Row title = 'Action Movies'fetchUrl={requests.fetchActionMovies
    }/>
        <Row title = 'Horrow Movies'fetchUrl={requests.fetchHorrorMovies
    }/>
        <Row title = 'Romance Movies'fetchUrl={requests.fetchRomanceMovies
    }/>
        <Row title = 'Documentaries'fetchUrl={requests.fetchDocumentaries
    }/>


    </div>
  );
}

export default App;
