import React, { useState } from "react";
import Header from "./components/Header";
import "./styles/app.css";
import Movies from "./components/Movies";
import Cupom from "./components/Cupom";
import Filters from "./components/Filters";
import Bag from "./components/Bag";
import data from "./data";


function App() {
  const [movies, setMovies] = useState(data.movies);
  const [filter, setFilter] = useState('');
  const [filterCategory, setFilterCategory] = useState([]);
  const [moviesInBag, setMoviesInBag] = useState([]);

  function handleClick(movieTitle) {
    const newMovies = [...movies];

    const movie = newMovies.find(x => x.title === movieTitle);
    movie.isStarred = !movie.isStarred;

    setMovies(newMovies);
  }

  function filterMovie(movie) {
    if(filter === movie.title) {
      return movie;
    }

    if(filterCategory.includes(movie.categories) && filterCategory) {
      return movie;
    }

    if(filterCategory.length > 0 && filterCategory.some(x => movie.categories.includes(x))) {
      return movie;
    }

    if(!filter) {
      return movie;
    }
  }

  function handleMovieInBag(movie) {
    const alreadyInBag = moviesInBag.find(m => m.title === movie.title);

    if (alreadyInBag) {
      alreadyInBag.quantity++;
    }

    const movieInBag = { title: movie.title, price: movie.price, backgroundImg: movie.backgroundImg, quantity: 1, }

    setMoviesInBag([...moviesInBag, movieInBag])
  }

  console.log(moviesInBag);

  return (
    <div className="App">
      <Header setFilter={setFilter} />
      <div className="banner-content">
        <Cupom />
        <Bag />
      </div>
      <main className="content">
        <div className="movies">
          <h2 className="topTitles">Top Filmes</h2>
          <div className="movies-list">
          {
              data.movies.map(movie => <Movies
                title={movie.title}
                price={movie.price}
                starsCount={movie.starsCount}
                isStarred={movie.isStarred} 
                backgroundImg={movie.backgroundImg}
                handleClick={handleClick} 
                handleMovieInBag={handleMovieInBag} />
            ).slice(0, 5)
            }
          </div>
        </div>
        <div className="movies">
          <h2 className="movieTitles">Filmes</h2>
          <Filters filterCategory={filterCategory} setFilterCategory={setFilterCategory} />
          <div className="movies-list">
            {
              data.movies.filter(filterMovie).map(movie => <Movies
                title={movie.title}
                price={movie.price}
                starsCount={movie.starsCount}
                isStarred={movie.isStarred} 
                backgroundImg={movie.backgroundImg} 
                handleClick={handleClick} 
                handleMovieInBag={handleMovieInBag} />
              )
            }
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
