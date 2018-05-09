import React from 'react';

const ButtonStyle = {
  margin: '10px 0'
};

const Button = ({ lable, handleClick }) => (
  <button
    className="btn btn-default"
    style={buttonStyle}
    onClick={handleClick}
  >
    {label}
  </button>
);

export default Button;

