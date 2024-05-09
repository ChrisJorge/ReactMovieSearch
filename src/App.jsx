import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

function App() {
  const apiKey = '79a88755'

  const [movie, setMovie] = useState(null);

  const getMovie = async(searchterm) => 
  {
    try{
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchterm}`);

      const data = await response.json();

      setMovie(data)
    } 
    catch (error) 
    {
      console.error(error)
    }
 }

  useEffect(() => {
    getMovie('Iron man')
  }, []);
  return (
    <>
     <div className="app">
      <Form movieSearch = {getMovie}/>
      <MovieDisplay movie = {movie}/>
     </div>
    </>
  )
}

export default App
