import React, { useState } from 'react';
import axios from 'axios';

export default function RandomSongButton() {
  const [song, setSong] = useState(null);

  const fetchRandomSong = async () => {
    try {
      const response = await axios.get('https://warm-gorge-84676.herokuapp.com/random_song/');
      const song = response.data;
      setSong(song);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={fetchRandomSong}>Play random song</button>
      {song && (
        <div>
          <h1>{song.title}</h1>
          <p>{song.artist}</p>
          <audio controls src={song.file} preload="auto" autoPlay />
        </div>
      )}
    </div>
  );
}