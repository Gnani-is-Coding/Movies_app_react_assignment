
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import PopularMovies from './Components/PopularMovies/PopularMovies';
import TopRated from './Components/TopRated/TopRated';
import UpcomingMovies from './Components/UpcomingMovies/UpcomingMovies';
import MovieDetails from './Components/MovieDetails/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path = "/" Component={PopularMovies}/>
        <Route exact path = "/top-rated" Component={TopRated}/>
        <Route exact path = "/upcoming-movies" Component={UpcomingMovies}/>
        <Route exact path = "/movie/:moviesID" Component={MovieDetails}/>
        <Route exact path = "/" Component={PopularMovies}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
