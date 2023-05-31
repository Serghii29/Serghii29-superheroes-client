import React from 'react';
import './Superhero.scss';
import { Card } from '../../types/card';

type Props = {
  superhero: Card;
};

export const SuperheroMainCard: React.FC<Props> = ({ superhero }) => {
  const { nickname, images } = superhero;

  return (
    <div className="superhero-card">
      <img src={images} alt="Superhero" className="superhero-card__photo" />
      <p className="superhero-card__nickname">{nickname}</p>
    </div>
  );
};
