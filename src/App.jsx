import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GameCard from './gamecard/GameCard';
import NavTop from './gamecard/nav/NavTop';
import Category from './gamecard/category/Category';
import AllGame from './gamecard/recentgame/AllGame';
import Welcome from './gamecard/welcome/Welcome';
import Footer from './gamecard/footer/Footer';
import ShowCGF from './gamecard/showCG/ShowCGF';
import ShowCGC from './gamecard/showCG/ShowCGC';
import ShowCGFam from './gamecard/showCG/ShowCGFam';
import ShowCGA from './gamecard/showCG/ShowCGA';
import GameTOD from './gamecard/game/gameTOD';
import GameDT from './gamecard/game/GameDT';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="screen">
            <div id='Home'><NavTop /></div>
            <Category />
            <div id='RecentGame'><AllGame /></div>
            <Welcome />
            <Footer />
          </div>
        }
      />

      <Route path='/ShowCGF' element={<ShowCGF />} />
      <Route path='/ShowCGC' element={<ShowCGC />} />
      <Route path='/ShowCGFam' element={<ShowCGFam />} />
      <Route path='/ShowCGA' element={<ShowCGA />} />
      <Route path="/game/:id" element={<GameTOD />} />
      <Route path="/game-dt/:id" element={<GameDT />} />
    </Routes>
  );
};

export default App;
