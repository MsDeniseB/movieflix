// myFlix-client/src/main-view/main-view.jsx

import React from 'react';
import axios from 'axios';

import { MovieCard } from './Movie-Card';
import { MovieView } from './Movie-View';

export class MainView extends React.Component {
  constructor() {
    // movies
    super()
    this.state = {
      movies: [
        { _id: 1, Title: 'Inception',
         Description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O...', 
         ImagePath: 'inception.jpg', 
         Genre:'Action · Adventure · Sci-Fi · Thriller', 
         Director: 'Christopher Nolan'},
        { _id: 2, Title: 'The Shawshank Redemption',
         Description: 'The Shawshank Redemption is a 1994 American drama film',
          ImagePath: 'shank.jpg',
          Genre:'Action · Adventure · Drama',
          Director: 'Frank Darabont'},
        { _id: 3, Title: 'Gladiator',
         Description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery',
         ImagePath: 'Gladiator.jpg',
         Genre:'Action · Adventure · Drama',
         Director: 'Ridley Scott'}
      ],
      selectedMovie: {}
    }
  }

  componentDidMount(){
    axios.get('https://[APP-NAME].herokuapp.com/movies')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }

  render() {
    const { movies, selectedMovie } = this.state;

    if (movies.length === 0) return <div className="main-view" />;

    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }}/>
         ))
        }
      </div>
    );
  }
}


