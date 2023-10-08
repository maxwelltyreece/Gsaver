import React, { useState } from 'react';

const Chatbot = () => (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <p>Chatbot</p>
    </div>
);

function CharacterCustomisation() {
  // State variables for character customization
  const [skinColor, setSkinColor] = useState("defaultSkinColor");
  const [gender, setGender] = useState("defaultGender");
  const [hairStyle, setHairStyle] = useState("defaultHairStyle"); // You need to add hairStyle state

  // Event handlers for customization options
  function handleSkinColorChange(newSkinColor) {
    setSkinColor(newSkinColor);
  }

  function handleGenderChange(newGender) {
    setGender(newGender);
  }

  function handleHairStyleChange(newHairStyle) {
    setHairStyle(newHairStyle);
  }

  return (
    <div>
      <h2>Customize Your Character</h2>

      {/* Skin Color */}
      <label>Skin Color:</label>
      <select value={skinColor} onChange={(e) => handleSkinColorChange(e.target.value)}>
        <option value="defaultSkinColor">Default</option>
        <option value="light">Light</option>
        <option value="medium">Medium</option>
        <option value="dark">Dark</option>
      </select>

      {/* Gender */}
      <label>Gender:</label>
      <input
        type="radio"
        value="male"
        checked={gender === 'male'}
        onChange={() => handleGenderChange('male')}
      /> Male
      <input
        type="radio"
        value="female"
        checked={gender === 'female'}
        onChange={() => handleGenderChange('female')}
      /> Female

      {/* Hair Style */}
      <label>Hair Style:</label>
      <select value={hairStyle} onChange={(e) => handleHairStyleChange(e.target.value)}>
        <option value="defaultHairStyle">Default</option>
        {/* Add more hair style options as needed */}
      </select>

      {/* Render your sprite using the selected customization options */}
      <img
        src={`src/data/Sprites/${skinColor}-${gender}-${hairStyle}.png`}
        alt="Customized Character"
      />
    </div>
  );
}

export default Chatbot;