import React from 'react';

const SpecialSkill = ({ onActivate }) => {
  return (
    <button onClick={onActivate} className="special-skill-button">
      Special Skill
    </button>
  );
};

export default SpecialSkill;
