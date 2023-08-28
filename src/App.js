import './App.css';

import React, { useState } from 'react'
import Navbar from './components/navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
const App =()=>{
  
  const pageSize= 5;
 
  // apiKey = process.env.REACT_APP_NEWS_API;
const [Progress, setProgress] = useState(0)
    return (      
    <div>
      <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={Progress}/>
        <Routes>        
            <Route key="Home" path='/Home' element={<News setProgress={setProgress} key='Home' pageSize={pageSize} country='us' category='general' />}>
            </Route>
            <Route key="general" path='/general' element={<News setProgress={setProgress} key='general' pageSize={pageSize} country='us' category='general' />}></Route>
            <Route key="business" path='/business' element={<News setProgress={setProgress} key='business' pageSize={pageSize} country='us' category='business' />}></Route>
            <Route key="Entertainment" path='/Entertainment' element={<News setProgress={setProgress} key='Entertainment' pageSize={pageSize} country='us' category='Entertainment' />}></Route>
            <Route key="health" path='/health' element={<News setProgress={setProgress} key='health' pageSize={pageSize} country='us' category='health' />}></Route>
            <Route key="science" path='/science' element={<News setProgress={setProgress} key='science' pageSize={pageSize} country='us' category='science' />}></Route>
            <Route key="sports" path='/sports' element={<News setProgress={setProgress} key='sports' pageSize={pageSize} country='us' category='sports' />}></Route>
            <Route key="technology" path='/technology' element={<News setProgress={setProgress} key='technology' pageSize={pageSize} country='us' category='technology' />}></Route>
        </Routes>
      </Router>
    </div>
    )
}
export default App