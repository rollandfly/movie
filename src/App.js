import React from 'react';
//Routing
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {GlobalStyle} from "./GlobalStyle";
import Header from './components/Header';
import Home from './screens/Home';
import Movie from './screens/Movie';
import NotFound from "./screens/NotFound";

const App = () => {
  return (
    <Router>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:movieId' element={<Movie />}/>
            <Route path='/*' element={<NotFound />} />
        </Routes>

        <GlobalStyle />
    </Router>
  );
}

export default App;
