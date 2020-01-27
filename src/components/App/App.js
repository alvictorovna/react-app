import React from 'react';
import './App.scss';
import Header from '../Header/Header';
import {AppRouter} from '../Router/AppRouter';
import Footer from '../Footer/Footer';

const App = ( {userData: {user}} )=>(
    <div className = 'app'>
      <Header user = {user}/>
      <AppRouter/>
      <Footer/>
    </div>
);

export default App;
