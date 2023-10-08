import React, { useState } from 'react';

const spriteImages = [
  '/data/Sprites/sprite1.png',
  '/data/Sprites/sprite2.png',
  '/data/Sprites/sprite3.png',
  '/data/Sprites/sprite4.png',
  '/data/Sprites/sprite5.png',
  '/data/Sprites/sprite6.png',
];

const ChatbotPage = () => {
  const [currentSpriteIndex, setCurrentSpriteIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);
  const selectedSprite = spriteImages[currentSpriteIndex];

  const handleNextSprite = () => {
    setCurrentSpriteIndex((prevIndex) => (prevIndex + 1) % spriteImages.length);
  };

  const handlePrevSprite = () => {
    setCurrentSpriteIndex((prevIndex) =>
      prevIndex === 0 ? spriteImages.length - 1 : prevIndex - 1
    );
  };

  const handleSaveSprite = () => {
    setIsSaved(true);
  };

  const spriteContainerStyle = {
    width: '300px',
    height: '300px',
    margin: '0 auto',
    overflow: 'hidden',
    position: 'relative',
  };

  const spriteImageStyle = {
    width: '100%',
    height: 'auto',
  };

  const buttonStyle = {
    fontSize: '24px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '1px 20px',
    margin: '0 10px',
    cursor: 'pointer',
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <p>Chatbot</p>
    </div>
      {isSaved ? (
        <div>
          <h2>Selected Sprite:</h2>
          <div style={spriteContainerStyle}>
            <img src={selectedSprite} alt="Sprite" style={spriteImageStyle} />
          </div>
        </div>
      ) : (
        <div>
          <div style={spriteContainerStyle}>
            <img
              src={selectedSprite}
              alt="Choose your chatbot"
              style={spriteImageStyle}
            />
          </div>
          <div style={{ marginTop: '20px' }}>
            <button style={buttonStyle} onClick={handlePrevSprite}>
              &#8249;
            </button>
            <button style={buttonStyle} onClick={handleNextSprite}>
              &#8250;
            </button>
            <button style={buttonStyle} onClick={handleSaveSprite}>
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotPage;
