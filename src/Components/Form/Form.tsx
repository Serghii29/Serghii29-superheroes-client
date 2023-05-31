import React, { useState, CSSProperties } from 'react';
import { client } from '../../utils/fetch';

export const Form: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const [real_name, setRealName] = useState('');
  const [origin_description, setDescription] = useState('');
  const [superpowers, setSuperpowers] = useState('');
  const [catchPhrase, setCatchPhrase] = useState('');
  const [images, setImages] = useState('');
  const styles: { [key: string]: CSSProperties }  = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '400px',
      margin: '0 auto',
    },
    formGroup: {
      marginBottom: '1rem',
    },
    label: {
      marginBottom: '0.5rem',
      fontWeight: 'bold',
    },
    input: {
      padding: '0.5rem',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '0.5rem',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: 'blue',
      color: 'white',
      cursor: 'pointer',
    },
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const superheroData = {
      nickname,
      real_name,
      origin_description,
      superpowers,
      catchPhrase,
      images,
    };

    try {
      await client.post('/superheroes', superheroData);
    } catch (error) {
      console.error('Error sending superhero data:', error);
    }

    setNickname('');
    setRealName('');
    setDescription('');
    setSuperpowers('');
    setCatchPhrase('');
    setImages('');
  };

  return (
    <form 
      onSubmit={handleSubmit}
      style={styles.form}
    >
      <div style={styles.formGroup}>
        <label style={styles.label}>Nickname:</label>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Real Name:</label>
        <input
          type="text"
          value={real_name}
          onChange={(e) => setRealName(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Image:</label>
        <input
          type="text"
          value={origin}
          onChange={(e) => setImages(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Description:</label>
        <textarea
          value={origin_description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Superpowers:</label>
        <textarea
          value={superpowers}
          onChange={(e) => setSuperpowers(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label style={styles.label}>Catch Phrase:</label>
        <input
          type="text"
          value={catchPhrase}
          onChange={(e) => setCatchPhrase(e.target.value)}
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.button}>Submit</button>
    </form>
  );
};
