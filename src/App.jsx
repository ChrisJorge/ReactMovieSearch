import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';

function App() {
  const apiKey = import.meta.env.VITE_APIKEY
  let movies = ['spider man', 'iron man', 'batman', 'dark knight rises', 'fast&furious', 'deadpool', 'peaky blinders', 'oppenheimer']
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
    let num = Math.floor(Math.random() * 8)
    getMovie(movies[num])
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
