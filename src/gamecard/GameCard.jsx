// GameCard.jsx
import React, { useState, useEffect } from 'react';
import './GameCard.css'; // เราจะสร้างไฟล์ CSS สำหรับการออกแบบภายหลัง
import { categories } from './dataGame/Game';

function GameCard() {
    // ดึงข้อมูลเกม Truth or Dare I มาใช้งาน
    // เราจะสมมติว่า 'Truth or Dare I' เป็นเกมแรกใน category 'Friend'
    const friendCategory = categories.find(cat => cat.id === "1000");
    const truthOrDareGame = friendCategory?.game.find(g => g.id === "1001");

    // State สำหรับจัดการสถานะของการ์ด
    const [isGameStarted, setIsGameStarted] = useState(false); // true เมื่อกดเริ่มเกม
    const [selectedType, setSelectedType] = useState(null); // 'truth' หรือ 'dare'
    const [currentCardText, setCurrentCardText] = useState(""); // ข้อความที่แสดงบนการ์ด
    const [isCardFlipped, setIsCardFlipped] = useState(false); // true เมื่อการ์ดพลิกแสดงคำถาม/คำท้า

    // ฟังก์ชันสำหรับสุ่มคำถาม/คำท้า
    const getRandomCard = (type) => {
        if (!truthOrDareGame) return "เกิดข้อผิดพลาด: ไม่พบข้อมูลเกม";

        const cardsOfType = truthOrDareGame.card.filter(card => card.type === type);
        if (cardsOfType.length === 0) return "ไม่พบคำถาม/คำท้าในประเภทนี้";

        const randomIndex = Math.floor(Math.random() * cardsOfType.length);
        return cardsOfType[randomIndex].text;
    };

    // เมื่อกดปุ่ม "เริ่มเกม"
    const handleStartGame = () => {
        setIsGameStarted(true);
        setIsCardFlipped(false); // ตรวจสอบให้แน่ใจว่าการ์ดยังไม่พลิก
        setSelectedType(null); // รีเซ็ตประเภทที่เลือก
        setCurrentCardText(""); // เคลียร์ข้อความเก่า
    };

    // เมื่อกดปุ่ม "Truth" หรือ "Dare"
    const handleSelectType = (type) => {
        setSelectedType(type);
        const text = getRandomCard(type);
        setCurrentCardText(text);
        setIsCardFlipped(true); // พลิกการ์ดเพื่อแสดงข้อความ
    };

    // ฟังก์ชันสำหรับเล่นใหม่อีกครั้ง (กลับไปหน้าเริ่มต้น)
    const handlePlayAgain = () => {
        setIsGameStarted(false);
        setIsCardFlipped(false);
        setSelectedType(null);
        setCurrentCardText("");
    };

    return (
        <div className="game-card-container">
            <div className={`game-card ${isCardFlipped ? 'flipped' : ''}`}>
                {/* ด้านหน้าของการ์ด (ยังไม่พลิก) */}
                {!isCardFlipped && (
                    <div className="game-card-front">
                        {!isGameStarted ? (
                            <>
                                <h2>{truthOrDareGame?.name || "เกมไพ่"}</h2>
                                <button onClick={handleStartGame} className="start-button">
                                    เริ่มเกม
                                </button>
                            </>
                        ) : (
                            <div className="type-selection">
                                <button onClick={() => handleSelectType('truth')} className="truth-button">
                                    จริง
                                </button>
                                <button onClick={() => handleSelectType('dare')} className="dare-button">
                                    ท้า
                                </button>
                            </div>
                        )}
                    </div>
                )}

                {/* ด้านหลังของการ์ด (พลิกแล้ว) */}
                {isCardFlipped && (
                    <div className="game-card-back">
                        <p className="card-text">{currentCardText}</p>
                        <button onClick={handlePlayAgain} className="play-again-button">
                            เล่นอีกครั้ง
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default GameCard;