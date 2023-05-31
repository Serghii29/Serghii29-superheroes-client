import React from 'react';
import './App.scss';
import { SuperheroMainCard } from './Components/SuperheroCard';
import { InfoCard } from './Components/InfoCard/InfoCard';
import { Superhero } from './types/superhero';

const superheroes = [
  {
    id: 1,
    nickname: 'Spiderman',
    images: 'https://www.fatline.com.ua/images/products/prints/aaa_4.png',
  },
  {
    id: 2,
    nickname: 'Deadpool',
    images: 'https://www.fatline.com.ua/images/products/prints/vap_18.png',
  },
  {
    id: 3,
    nickname: 'Loki',
    images:
      'https://www.fatline.com.ua/' +
      'images/products/prints/v__321bj__213jb123.png',
  },
  {
    id: 4,
    nickname: 'Ironman',
    images:
      'https://www.fatline.com.ua/' +
      'images/products/prints/v_123pj21obkj213b.png',
  },
  {
    id: 5,
    nickname: 'Dr. Strange',
    images:
      'https://www.fatline.com.ua/' +
      'images/products/prints/v_91b23p21un21n3.png',
  },
  {
    id: 6,
    nickname: 'Moon Knight',
    images: 'https://www.fatline.com.ua/images/products/prints/sayt_673.png',
  },
  {
    id: 6,
    nickname: 'Black Widow',
    images:
      'https://www.fatline.com.ua/' +
      'images/products/prints/v_b12321n-i312-n21.png',
  },
  {
    id: 7,
    nickname: 'Hulk',
    images:
      'https://www.fatline.com.ua/' +
      'images/products/prints/bez_imeni-1_6.png',
  },
];

const infoCard: Superhero = {
  id: 1,
  nickname: 'Superman',
  real_name: 'Clark Kent',
  origin_description:
    'He was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton',
  superpowers: 'solar energy absorption and hea',
  catch_phrase:
    'Look, up in the sky, it is a bird, it is a plane, it is Superman!',
  images:
    'https://www.fatline.com.ua/' + 'images/products/prints/bez_imeni-1_6.png',
};

function App() {
  return (
    <div className="App">
      {/* {superheroes.map((superhero) => (
        <SuperheroMainCard key={superhero.id} superhero={superhero} />
      ))} */}
      <InfoCard infoCard={infoCard} />
    </div>
  );
}

export default App;
