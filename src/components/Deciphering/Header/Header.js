import React, { useContext, useState } from 'react'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import { WrapHeader, StyleIconButton } from './Style'
import { Button, CircularProgress } from '@mui/material'
import { Context as GeneralContext } from 'components/Main/Context'
import { PauseOutlined } from '@mui/icons-material';
import { Crud as MainCrud } from 'components/Deciphering/Header/hooks'
import { useSelector } from 'react-redux';

const Header = () => {
    const { vowelCode, letterAddOn } = useSelector(state => state.static)
    const { phonemes, staticWords, staticWord, wordIndex } = useSelector(state => state.words)
    const { onPlayPause, isPlaying } = useContext(GeneralContext)
    const [loading, setLoading] = useState(false)

    const { prevWord, nextWord, saveData } = MainCrud()

    const sendData = async () => {
        setLoading(true)
        await saveData()
        setLoading(false)
    }

    return (
        <WrapHeader>
            <div className='words'>
                <div className=''>
                    <div className='wordAndType'>
                        <StyleIconButton onClick={onPlayPause}>
                            {isPlaying ? <PauseOutlined className='play-icon' /> : <PlayArrowOutlinedIcon className='play-icon' />}
                        </StyleIconButton>
                        <div style={{ width: '10px' }} />
                        {staticWord?.text ||
                            <CircularProgress size={20} />}
                    </div>
                    <div className='wordType'>
                        <div >
                            המילה הנכונה
                        </div>
                    </div>
                </div>

                <div className=''>
                    <div className='wordAndType'>
                        {phonemes?.map((phoneme, index) =>
                            <div className='wrap-letter' key={phoneme.id}>
                                <div class='letter'>
                                    {phoneme.letter}
                                    <span bold={phoneme.edited} className='vowelCode' dangerouslySetInnerHTML={{ __html: vowelCode?.[phoneme.vowel_code]?.html_code }} />
                                    <span dangerouslySetInnerHTML={{ __html: letterAddOn?.[phoneme.letter_add_on]?.html_code }} />
                                </div>
                            </div>
                        ) ||
                            <CircularProgress size={20} />
                        }
                    </div>
                    <div className='wordType'>
                        המילה שהתקבלה
                    </div>
                </div>
            </div>
            {!phonemes ||
                <div className='buttons'>
                    <Button disabled={!wordIndex} onClick={prevWord} className='btn' color="secondary" variant='outlined'>
                        הקודמת
                    </Button>
                    <Button disabled={wordIndex == staticWords?.word_defs?.length - 1} onClick={nextWord} className='btn' color="secondary" variant='outlined'>
                        הבאה
                    </Button>
                    <LoadingButton
                        className="save"
                        loading={loading}
                        loadingPosition="end"
                        onClick={sendData}
                        color="secondary"
                        variant='contained'>
                        אישור מילה ומעבר
                    </LoadingButton>
                </div>}
        </WrapHeader>
    )
}

export default Header