import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

function App() {
  const apiKey = '79a88755'

  const [movie, setMovie] = useState(null);

  const getMovie = async(movie) => {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${movie}`);

    const data = await response.json();

    setMovie(data)
  }
  return (
    <>
     <div className="app">
      <Form movieSearch = {getMovie}/>
      <MovieDisplay/>
     </div>
    </>
  )
}

export default App
