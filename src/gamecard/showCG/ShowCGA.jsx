import React from 'react';
import { categories } from '../dataGame/Game';
import NavTop from '../nav/NavTop.jsx';
import './ShowCG.css'
import { useNavigate } from 'react-router-dom';

const ShowCGA = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className='screenSAG'>

        <div
          className=" text-white rounded-full w-20 h-10 flex items-center justify-center cursor-pointer ml-5 mb-5 bg-[#9E1B1D]"
          onClick={() => navigate('/')}
        >
          <div className="text-xl font-bold"> Back </div>
        </div>

        <h1 className='mainText'>Games with Adult</h1>

        <div className='flex flex-wrap'>
          {categories
            .filter(category => category.name === "Adult")
            .map(category =>
              category.game.map(gameItem => (
                <div
                  key={gameItem.id}
                  className="BoxAG BoxAGA"
                  style={{ backgroundColor: category.color }}
                  onClick={() => {
                    if (gameItem.type === "deep-talk") {
                      navigate(`/game-dt/${gameItem.id}`);
                    } else {
                      navigate(`/game/${gameItem.id}`);
                    }
                  }}
                >
                  <div className='flex flex-wrap mt-10 m-5'>
                    <h1 className='TextBoxAG'>{gameItem.name}</h1>
                  </div>
                </div>
              ))
            )}
        </div>
      </div>
    </>
  );
};

export default ShowCGA;
