import React from 'react';
import './AllGame.css';
import { categories } from '../dataGame/Game';
import { useNavigate } from 'react-router-dom';

const AllGame = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='screenAG'>
                <h1 className='mainAG'>RECENT GAMES</h1>

                <div className='flex flex-wrap'>
                    {categories.map(category =>
                        category.game.map(gameItem => (
                            <div
                                key={gameItem.id}
                                className={`BoxAG ${category.name === "Friend" ? "BoxAGF" : ""}
                                            ${category.name === "Couples" ? "BoxAGC" : ""}
                                            ${category.name === "Family" ? "BoxAGFam" : ""}
                                            ${category.name === "Adult" ? "BoxAGA" : ""}`}
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
                                    <h1 className='TextBoxAG'>
                                        {gameItem.name}
                                    </h1>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
}

export default AllGame;
