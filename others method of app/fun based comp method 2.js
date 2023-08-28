import './App.css';

import React from 'react'
import Navbar from './components/navbar';
import News from './components/News';
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";


const router = createBrowserRouter([
  { path: "/", Component: Navbar },
  { path: "/", Component: News },
  {path:"*", Component:Root},
]);

export default function App(){
  return <RouterProvider router={router}/>;
}

    function Root() {
 
    return (
      <div>
        <Navbar />
        <Routes>
            <Route key="Home" path='/Home' element={<News key='Home' pageSize={5} country='us' category='general' />}></Route>
            <Route key="general" path='/general' element={<News key='general' pageSize={5} country='us' category='general' />}></Route>
            <Route key="business" path='/business' element={<News key='business' pageSize={5} country='us' category='business' />}></Route>
            <Route key="Entertainment" path='/Entertainment' element={<News key='Entertainment' pageSize={5} country='us' category='Entertainment' />}></Route>
            <Route key="health" path='/health' element={<News key='health' pageSize={5} country='us' category='health' />}></Route>
            <Route key="science" path='/science' element={<News key='science' pageSize={5} country='us' category='science' />}></Route>
            <Route key="sports" path='/sports' element={<News key='sports' pageSize={5} country='us' category='sports' />}></Route>
            <Route key="technology" path='/technology' element={<News key='technology' pageSize={5} country='us' category='technology' />}></Route>
        </Routes>

      </div>
    )
  }