import React, {useState, useEffect} from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import PubList from './components/PubList';
import PubDetail from './components/PubDetail';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom'; //me permite rutear los diferentes componentes para mostrar algunos y otros no segun la necesidad

function App() {
  const [user,setUser] = useState(null);
    useEffect(checkUser, []);
    function checkUser(){
      fetch('http://localhost:8000/auth/check', {
        credentials: 'include',
      })
        .then((response) => response.json())
        .then((data) => {
          changeUser(data.data);
        });
    }

  const changeUser = (newUser) =>{
    setUser(newUser);
  }

  return(
    <BrowserRouter>
      <NavBar user={user} changeUser={changeUser}/>

      <Carousel/>

      <Switch>
        <Route exact path="/"> 
            <PubList type="publicaciones"/>
        </Route>
        <Route path="/mispublicaciones">
            <PubList type="mispublicaciones"/>
        </Route>
        <Route path="/favoritos">
            <PubList type="favoritos"/>
        </Route>
        <Route path="/detail/:id">
        <PubDetail/>
        </Route>

        <NotFound/>
      </Switch>

    </BrowserRouter>
  );
}
export default App;
