import styled from "styled-components";
import WavesurferPlayer from '@wavesurfer/react'
import { Scroll, Section } from "styles/GlobalCss";

const WrapRecord = styled.div`
${Section};
height:auto;
margin-bottom:10px;
display:flex;
column-gap: 10px;
justify-content: center;
align-items:center;

#play{
    width:40px !important;
    height:40px !important;
    transform: scaleX(-1) !important;
}
${Scroll};


#record{
    width:calc(100% - 40px) !important;
    transform: scaleX(-1);
    direction: ltr;
    overflow-x: auto;
    ${Scroll};
}

.linearProgress{
    width:100% !important;
}

height:40px;

`

const WrapWavesurferPlayer = styled(WavesurferPlayer)`
width: calc(100% - 30px) !important;
width: 100% !important;
`

export { WrapRecord, WrapWavesurferPlayer }