import React from 'react';
import { Modal } from '@mui/material';
import { InfoCard } from '../InfoCard';
import { Superhero } from '../../types/superhero';

type Props = {
  open: boolean;
  handleClose: () => void;
  selectHero: Superhero;
}

export const CustomModal: React.FC<Props> = ({ open, handleClose, selectHero }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <InfoCard infoCard={selectHero} />
    </Modal>
  );
};
