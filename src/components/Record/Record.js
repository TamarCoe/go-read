import { React, useContext, useState } from 'react'
import WavesurferPlayer from '@wavesurfer/react'
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { WrapRecord, WrapWavesurferPlayer } from './Style'
import { IconButton, LinearProgress, CircularProgress } from '@mui/material'
import { Context } from 'components/Main/Context';
import { primary } from 'styles/theme';

const Record = () => {
    const { isPlaying, setIsPlaying, onPlayPause, onReadyPlay, wavesurfer, record, localRecord } = useContext(Context)

    return (
        <WrapRecord>
            {record && (record.recording_file || !localRecord) ?
                <>
                    <IconButton id={"play"} onClick={onPlayPause}>
                        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                    </IconButton>
                    <div id="record">

                        <WrapWavesurferPlayer
                            id="record"
                            minPxPerSec={150}
                            // hideScrollbar={false}
                            autoCenter={false}
                            height={80}
                            waveColor={primary}
                            url={localRecord ? record.recording_file : require(`../../records/${record.filename}`)}
                            onReady={onReadyPlay}
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

export default Record