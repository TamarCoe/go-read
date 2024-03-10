import { React, useContext, useState } from 'react'
import WavesurferPlayer from '@wavesurfer/react'
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { WrapRecord } from './Style'
import { IconButton, LinearProgress, CircularProgress } from '@mui/material'
import { Context } from 'components/Main/Context';
import { primary } from 'styles/theme';
// const Minimap = dynamic(
//     () => import("../../../node_modules/react-wavesurfer/lib/plugins/minimap"),
//     { ssr: false }

// )
const App = () => {
    const [wavesurfer, setWavesurfer] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const { record, localRecord } = useContext(Context)

    const onReady = (ws) => {
        setWavesurfer(ws)
        setIsPlaying(false)
    }

    const onPlayPause = () => {
        wavesurfer && wavesurfer.playPause()
    }

    return (
        <WrapRecord>
            {record && (record.recording_file || !localRecord) ?
                <>
                    <IconButton id={"play"} onClick={onPlayPause}>
                        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                    </IconButton>
                    <div id="record">

                        <WavesurferPlayer
                            id="record"
                            minPxPerSec={150}
                            hideScrollbar={false}
                            autoCenter={false}
                            height={80}
                            waveColor={primary}
                            url={localRecord ? record.recording_file : require(`../../records/${record.filename}`)}
                            onReady={onReady}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                        />
                    </div>

                </> :
               <></>
            }
        </WrapRecord>
    )
}

export default App