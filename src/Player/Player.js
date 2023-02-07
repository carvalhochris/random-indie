import React from "react";
import { useAudioPlayer } from "react-use-audio-player";
import { Center, Square } from "@chakra-ui/react";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePause } from "react-icons/ai";
// import { AudioPlayerProvider } from "react-use-audio-player";
// // import { ChakraProvider } from '@chakra-ui/react'

const AudioPlayer = ({ file }) => {
  const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
    src: file,
    format: "mp3",
    autoplay: true,
    onend: () => console.log("sound has ended!"),
  });

  if (!ready && !loading) return <div>No audio to play</div>;
  if (loading) return <small>Loading audio...</small>;

  return (
    <div>
      <Center>
        <button onClick={togglePlayPause}>
          <Square
            size="80px"
            bg="#161616"
            color="white"
            marginTop="10px"
            marginBottom="5px"
            borderStyle="dotted"
            borderWidth="1px"
          >
            {playing ? (
              // <div>
              <AiOutlinePause />
            ) : (
              // </div>
              // <div>
              <BiPlay />
              // </div>
            )}
          </Square>
        </button>
      </Center>
    </div>
  );
};

export default AudioPlayer;
