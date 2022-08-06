import React from 'react';
import './Button.scss';

import { AiOutlineArrowDown } from 'react-icons/ai';

const Button = ({ name }) => {
  return (
    <button className="btn">
      {name}
      <AiOutlineArrowDown />
    </button>
  );
};

export default Button;
