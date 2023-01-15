import React, { useState } from 'react';
import axios from 'axios';
import AudioPlayer from './Player/Player';
import { Button  } from '@chakra-ui/react'
// import { Stack } from '@chakra-ui/react'

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
      
      {song && (
        <div>
          <h1>{song.title}</h1>
          <p>{song.artist}</p>
          <br></br>
          {/* <audio controls src={song.file} preload="auto" autoPlay /> */}
          <AudioPlayer file={song.file} />
        </div>
      )}
      <br></br>
      {/* <button onClick={fetchRandomSong} className="btn">Click to discover</button> */}
      <Button onClick={fetchRandomSong} colorScheme='white' variant='outline'>Click to discover</Button>
        
    </div>
  );
}