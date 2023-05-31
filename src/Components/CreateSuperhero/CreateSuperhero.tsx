import React from 'react';
import './CreateSuperhero.scss';

type Props = {
  hendleCreat: () => void;
}

export const CreateSuperhero: React.FC<Props> = ({ hendleCreat }) => {
  const handleClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="create-card" onClick={handleClick}>
      <div 
        className="create-card__plus"
        onClick={hendleCreat}
      >
        &#43;
      </div>
    </div>
  );
};
