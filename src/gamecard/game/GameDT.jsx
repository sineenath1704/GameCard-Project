import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categories } from '../dataGame/Game';
import './Game.css';

const GameDT = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isGameStarted, setIsGameStarted] = useState(false);
  const [currentCardText, setCurrentCardText] = useState("");
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [remainingCards, setRemainingCards] = useState([]);

  const foundGame = categories
    .flatMap(cat =>
      cat.game
        .filter(game => game.type === "deep-talk")
        .map(game => ({
          ...game,
          category: cat.name,
          color: cat.color || "#EFA6CA",
        }))
    )
    .find(game => game.id === id);

  const handleStartGame = () => {
    if (!foundGame) return;
    const cards = foundGame.card.filter(card => card.type === "deep");
    setRemainingCards(cards);
    setIsGameStarted(true);
    setIsCardFlipped(false);
    setCurrentCardText("");
  };

  const handleDrawCard = () => {
    if (remainingCards.length === 0) {
      setCurrentCardText("คำถามหมดแล้ว 🎉");
      setIsCardFlipped(true);
      return;
    }

    const randomIndex = Math.floor(Math.random() * remainingCards.length);
    const selectedCard = remainingCards[randomIndex];
    const newRemaining = [...remainingCards];
    newRemaining.splice(randomIndex, 1);

    setCurrentCardText(selectedCard.text);
    setRemainingCards(newRemaining);
    setIsCardFlipped(true);
  };

  const handlePlayAgain = () => {
    setIsCardFlipped(false);
    setCurrentCardText("");
  };

  return (
    <div className='bg-white font-averia flex flex-col items-center p-6'>
      {/* Back + ชื่อเกม */}
      <div className="w-full flex justify-between items-center mb-5">
        <div
          className="text-white rounded-full w-20 h-10 flex items-center justify-center cursor-pointer bg-[#680A75] ml-24 hover:bg-[#EC288C]"
          onClick={() => navigate('/')}
        >
          <div className="text-sm font-bold">Back</div>
        </div>
        <h2 className="text-xl font-bold text-[#680A75]">{foundGame?.name || "ไม่พบเกม"}</h2>
      </div>

      {/* การ์ด */}
      <div className={`game-card ${isCardFlipped ? 'flipped' : ''} mb-6`}>
        {!isCardFlipped ? (
          <div className="game-card-front bg-[#EFA6CA] rounded-2xl h-[400px] w-[300px] 
            flex items-center justify-center 
            shadow-[-8px_-8px_2px] shadow-[#680A75] 
            bg-[url('/picture/BG-Noise.png')]">
            <img
              src="/picture/CardLogo.png"
              alt="G Game Logo"
              className="max-w-[50%] max-h-[70%] object-contain"
            />
          </div>
        ) : (
          <div className="game-card-back bg-white shadow-[5px_5px_0px] border-2 border-black shadow-[#510C1E] rounded-2xl h-[400px] w-[300px] 
            flex items-center justify-center p-5 text-center">
            <p className="card-text text-lg font-semibold text-[#510C1E]">{currentCardText}</p>
          </div>
        )}
      </div>

      {/* จำนวนการ์ดที่เหลือ */}
      {isGameStarted && !isCardFlipped && (
        <div className="text-[#680A75] font-semibold text-sm mb-2">
          คำถามที่เหลือ: {remainingCards.length} ข้อ
        </div>
      )}

      {/* ปุ่มล่าง */}
      <div className="flex flex-col items-center gap-3">
        {!isGameStarted ? (
          <button onClick={handleStartGame} className="start-button">
            เริ่มเกม
          </button>
        ) : !isCardFlipped ? (
          <button onClick={handleDrawCard} className="play-again-button bg-[#EC288C] hover:bg-[#EC288C]">
            สุ่มคำถาม Deep Talk
          </button>
        ) : (
          <button onClick={handlePlayAgain} className="play-again-button">
            เล่นอีกครั้ง
          </button>
        )}
      </div>
    </div>
  );
};

export default GameDT;
