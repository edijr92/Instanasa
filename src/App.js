import React, { useState, useEffect } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './componets/home'
import Nav from './componets/nav'
import List from './componets/list'
import axios from 'axios'




function App(props) {
  const [sol, setSol] = useState([])

  useEffect(() => {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=4daGu2mWR24Eo3VEXpfvcBORkEEu3ieMXbkNmLxI`)
      .then((res) => {
        if (res !== undefined) {
          setSol(res.data.rovers);
        }
      }).catch(err => {
        console.log(err)
      });

  }, []);

  return (
    <div style={{ backgroundImage: 'url(https://wallpapercave.com/wp/wp2461878.jpg)', height: '100%' }}>
      <Route path='/' component={Nav} />
      <Route exact path='/' component={Home} />
      <Route exact path='/rover/:name' ><List sol={sol} /></Route>
    </div>
  );
}

export default App;
