import React from 'react';
import { Superhero } from '../../types/superhero';
import './InfoCard.scss';

type Props = {
  infoCard: Superhero;
};

export const InfoCard: React.FC<Props> = ({ infoCard }) => {
  const {
    nickname,
    real_name,
    origin_description,
    superpowers,
    catch_phrase,
    images,
  } = infoCard;

  return (
    <div className="superhero-info">
      <div className="superhero-info__close-button"></div>
      <img className="superhero-info__photo" src={images} alt={nickname} />
      <h2 className="superhero-info__nickname">{nickname}</h2>
      <p className="superhero-info__real-name">Real Name: {real_name}</p>
      <p className="superhero-info__description">
        Description: {origin_description}
      </p>
      <p className="superhero-info__superpowers">Superpowers: {superpowers}</p>
      <p className="superhero-info__catch-phrase">
        Catch Phrase: {catch_phrase}
      </p>

      <div className="superhero-info__buttons">
        <button className="superhero-info__edit-button">Edit</button>
        <button className="superhero-info__delete-button">Delete</button>
      </div>
    </div>
  );
};
