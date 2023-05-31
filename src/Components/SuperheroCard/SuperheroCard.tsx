import React from 'react';
import './Superhero.scss';
import { Card } from '../../types/card';
import { Superhero } from '../../types/superhero';
import { getSuperheroById } from '../../api/superhero';

type Props = {
  superhero: Card;
  handleSelect: (superhero: Superhero) => void;
};

export const SuperheroMainCard: React.FC<Props> = ({ superhero, handleSelect }) => {
  const { id, nickname, images } = superhero;

  const selectSuperhero = async () => {
    try {
      const data = await getSuperheroById('' + id);
  
      handleSelect(data);
  
    } catch {
      console.log('tut');
    }
  };

  return (
    <div 
      className="superhero-card"
      onClick={selectSuperhero}
    >
      <img src={images} alt="Superhero" className="superhero-card__photo" />
      <p className="superhero-card__nickname">{nickname}</p>
    </div>
  );
};
