import React from 'react'
import Aud from "../../../audio.mp3";
import Player from "react-wavy-audio";

const PlayRecord = () => {

  return (
    <div style={{width:'100%'}}>
      <Player
        audioUrl="https://www.mfiles.co.uk/mp3-downloads/gs-cd-track2.mp3"
        waveStyles={{
          // cursorWidth: 1,
          progressColor: "#ee3ec9",
          // responsive: true,
          waveColor: "#121640",
          cursorColor: "transparent",
          barWidth: 10
        }}
        zoom={100}
        // waveJson
        hideImage="true"
      // hideWave="true"
      // containerStyle={}
      />
    </div>
  )
}

export default PlayRecord