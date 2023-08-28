
import './App.css';

import React from 'react'
import Navbar from './components/navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

export default function App(){
  
  return (
	<Router>
	<Navbar />
        <LoadingBar
        color='#f11946'
        progress={10}
      />
    <div>
        
        <Routes>
            <Route key="Home" path='/Home' element={<News key='Home' pageSize={10} country='us' category='general' />}></Route>
            <Route key="general" path='/general' element={<News key='general' pageSize={10} country='us' category='general' />}></Route>
            <Route key="business" path='/business' element={<News key='business' pageSize={10} country='us' category='business' />}></Route>
            <Route key="Entertainment" path='/Entertainment' element={<News key='Entertainment' pageSize={10} country='us' category='Entertainment' />}></Route>
            <Route key="health" path='/health' element={<News key='health' pageSize={10} country='us' category='health' />}></Route>
            <Route key="science" path='/science' element={<News key='science' pageSize={10} country='us' category='science' />}></Route>
            <Route key="sports" path='/sports' element={<News key='sports' pageSize={10} country='us' category='sports' />}></Route>
            <Route key="technology" path='/technology' element={<News key='technology' pageSize={10} country='us' category='technology' />}></Route>
        </Routes>

      </div>
</Router>
    )	
  }