import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getNasaPhotos } from './store/actions/test'
import './App.css';
import { Route } from 'react-router-dom';
import Home from './componets/home'
import Nav from './componets/nav'
import List from './componets/list'




function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNasaPhotos())
  })

  return (
    <div style={{ backgroundImage: 'url(https://wallpapercave.com/wp/wp2461878.jpg)', height: '100%' }}>
      <Route path='/' component={Nav} />
      <Route exact path='/' component={Home} />
      <Route exact path='/rover/:name' component={List} />
    </div>
  );
}

export default App;
