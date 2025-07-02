import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categories } from '../dataGame/Game';
import './Game.css';

const GameTOD = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isGameStarted, setIsGameStarted] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [currentCardText, setCurrentCardText] = useState("");
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const foundGame = categories
    .flatMap(cat =>
      cat.game
        .filter(game => game.type === "tod")
        .map(game => ({ ...game, category: cat.name }))
    )
    .find(game => game.id === id);

  const [remainingTruth, setRemainingTruth] = useState([]);
  const [remainingDare, setRemainingDare] = useState([]);

  const handleStartGame = () => {
    if (!foundGame) return;
    const truth = foundGame.card.filter(card => card.type === "truth");
    const dare = foundGame.card.filter(card => card.type === "dare");
    setRemainingTruth(truth);
    setRemainingDare(dare);
    setIsGameStarted(true);
    setIsCardFlipped(false);
    setSelectedType(null);
    setCurrentCardText("");
  };

  const getRandomCard = (cards) => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return { card: cards[randomIndex], index: randomIndex };
  };

  const handleSelectType = (type) => {
    let selectedSet = type === "truth" ? remainingTruth : remainingDare;
    if (selectedSet.length === 0) {
      setCurrentCardText("คำถามหมดแล้ว 🎉");
      setIsCardFlipped(true);
      return;
    }

    const { card, index } = getRandomCard(selectedSet);
    setCurrentCardText(card.text);
    setIsCardFlipped(true);
    setSelectedType(type);

    const updated = [...selectedSet];
    updated.splice(index, 1);
    if (type === "truth") {
      setRemainingTruth(updated);
    } else {
      setRemainingDare(updated);
    }
  };

  const handlePlayAgain = () => {
    setIsCardFlipped(false);
    setSelectedType(null);
    setCurrentCardText("");
  };

  return (
    <div className='screenGTOD font-averia flex flex-col items-center p-6'>
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
      <div className={`game-card ${isCardFlipped ? 'flipped' : ''} mb-4`}>
        {!isCardFlipped ? (
          <div className="game-card-front bg-[#EFA6CA] rounded-2xl h-[400px] w-[300px] 
            flex items-center justify-center 
            shadow-[-8px_-8px_2px] shadow-[#680A75] 
            bg-[url('/picture/BG-Noise.png')] p-4">
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
        <div className="flex flex-col items-center text-[#680A75] font-semibold text-sm mt-1">
          <p>คำถามที่เหลือ</p>
          <div className="flex gap-6 mt-1">
            <span>จริง: {remainingTruth.length}</span>
            <span>ท้า: {remainingDare.length}</span>
          </div>
        </div>
      )}

      {/* ปุ่ม */}
      <div className="flex gap-4 mt-3">
        {!isGameStarted ? (
          <button onClick={handleStartGame} className="start-button">
            เริ่มเกม
          </button>
        ) : !isCardFlipped ? (
          <>
            <button onClick={() => handleSelectType('truth')} className="truth-button">
              จริง
            </button>
            <button onClick={() => handleSelectType('dare')} className="dare-button">
              ท้า
            </button>
          </>
        ) : (
          <button onClick={handlePlayAgain} className="play-again-button">
            เล่นอีกครั้ง
          </button>
        )}
      </div>
    </div>
  );
};

export default GameTOD;
