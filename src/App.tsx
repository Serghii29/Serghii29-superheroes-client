import React, { useEffect, useState } from 'react';
import './App.scss';
import { SuperheroMainCard } from './Components/SuperheroCard';
import { CreateSuperhero } from './Components/CreateSuperhero';
import { Pagination } from '@mui/material';
import { CustomModal } from './Components/CustomModal';
import { Superhero } from './types/superhero';
import { getAllHeroes } from './api/superhero';
import { Modal } from '@mui/material';
import { Form } from 'react-router-dom';

//   {
//     id: 1,
//     nickname: 'Spiderman',
//     images: 'https://www.fatline.com.ua/images/products/prints/aaa_4.png',
//   },
//   {
//     id: 2,
//     nickname: 'Deadpool',
//     images: 'https://www.fatline.com.ua/images/products/prints/vap_18.png',
//   },
//   {
//     id: 3,
//     nickname: 'Loki',
//     images:
//       'https://www.fatline.com.ua/images/products/prints/v__321bj__213jb123.png',
//   },
//   {
//     id: 4,
//     nickname: 'Ironman',
//     images:
//       'https://www.fatline.com.ua/images/products/prints/v_123pj21obkj213b.png',
//   },
//   {
//     id: 5,
//     nickname: 'Dr. Strange',
//     images:
//       'https://www.fatline.com.ua/images/products/prints/v_91b23p21un21n3.png',
//   },
//   {
//     id: 6,
//     nickname: 'Moon Knight',
//     images: 'https://www.fatline.com.ua/images/products/prints/sayt_673.png',
//   },
//   {
//     id: 6,
//     nickname: 'Black Widow',
//     images:
//       'https://www.fatline.com.ua/images/products/prints/v_b12321n-i312-n21.png',
//   },
//   {
//     id: 7,
//     nickname: 'Hulk',
//     images:
//       'https://www.fatline.com.ua/images/products/prints/bez_imeni-1_6.png',
//   },
// ];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);
  const [selectHero, setSelectHero] = useState<Superhero | null>(null);
  const [isCreat, setIsCreat] = useState(false);

  const handleSelect = (superhero: Superhero | null) => {
    setSelectHero(superhero);
  };

  const fetchAllSuperheroes = async () => {
    try {
      const data = await getAllHeroes();

      setSuperheroes(data);
    } catch (error) {
      console.log('помилка тут');
    }
  };

  useEffect(() => {
    fetchAllSuperheroes();
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const hendleCreat = () => {
    setIsCreat(true);
  };

  return (
    <div className="App">
      <div 
        className='container'
        onClick={handleOpen}
      >
        {superheroes.map((superhero) => (
          <SuperheroMainCard
            key={superhero.id}
            superhero={superhero}
            handleSelect={handleSelect}
          />
        ))}
        
        <CreateSuperhero hendleCreat={hendleCreat} />
      </div>

      {selectHero && (
        <CustomModal 
          open={isOpen} 
          handleClose={handleClose}
          selectHero={selectHero}
        />
      )}

      <Modal
        open={isCreat}
        onClose={() => setIsCreat(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Form />
      </Modal>

      <Pagination count={2} color="secondary" />
    </div>
  );
}

export default App;
