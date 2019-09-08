import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    
    /*to prevent multiple saving of a movie*/
    const present = savedList.find(el => el.title === movie.title)
    if (!present) {
      setSavedList( [...savedList, movie] );
    }
    // //The one below didn't work in all instances!:
    // (!savedList.includes(movie))&& 

    // setSavedList( [...savedList, movie] );
    
  };

  return (
    <div>
      <Link to='/savedList'><SavedList list={savedList} /></Link>
      <Route exact path='/' component={MovieList} />
      <Route path='/movies/:id' render={props => <Movie {...props} addToSavedList={addToSavedList} />} />
    </div>
  );
};

export default App;
