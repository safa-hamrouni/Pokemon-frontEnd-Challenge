import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";
import App from './App';
import PokemonDetails from './components/PokemonDetails';


ReactDOM.render(
    <Router>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/:name" element={<PokemonDetails />} />
        </Routes>
    </React.Fragment>
  </Router>,
  document.getElementById('root')
);
