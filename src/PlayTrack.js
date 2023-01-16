import React from "react";
// import Howler from './Howler'

class PlayTrack extends React.Component {
  constructor() {
    super();
    this.state = {
      loadedCharacter: false,
      name: null,
      file: null,
      artist: null,
    };
  }

  getSong() {
    const randomNumber = Math.round(Math.random() * 2 + 1);
    console.log(randomNumber);
    const url = `https://warm-gorge-84676.herokuapp.com/songs/${randomNumber}/`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          title: data.title,
          file: data.file,
          artist: data.artist,
          loadedCharacter: true,
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.loadedCharacter && (
          <div>
            <h2>{this.state.title}</h2>
            <h3>by {this.state.artist}</h3>
            {/* <button onclick={this.pauseSong} type="button">Pause Audio</button> */}
            <audio
              id="audio1"
              src={this.state.file}
              preload="auto"
              autoPlay
              controls
              controlsList="nodownload noplaybackrate"
            />
          </div>
        )}
        <br></br>
        <button type="button" onClick={() => this.getSong()} className="btn">
          Click to discover
        </button>
        <br></br>
      </div>
    );
  }
}

export default PlayTrack;
