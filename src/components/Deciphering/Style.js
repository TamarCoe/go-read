import { Button } from "@mui/material";
import styled from "styled-components";
import { Hover, Scroll } from "styles/GlobalCss";
import { black } from "styles/theme";


const Vowel = styled(Button)`
    border-radius: 6px;
    border: 0.5px dashed #E4E6EF !important;
    background: rgba(245, 248, 250, 0.30) !important;
    padding: 10px !important;
    display: block !important;
    color: #7D7D7D !important;
    text-align: right !important;
    font-family: Poppins !important;
    font-size: 12px !important;
    font-style: normal !important;
    font-weight: 500 !important;
    line-height: normal !important;

    color:${props => props.defaultVowel && black} !important;;
    border: ${props => props.defaultVowel && '1px solid #37940C'} !important;;
    background: ${props => props.defaultVowel && '#C3FFA7'} !important;;

    color:${props => props.error && black} !important;
    background:${props => props.error && 'rgba(253, 0, 0, 0.30)'} !important;
    border: ${props => props.error && '1px solid #FD0000'} !important;;

    background:${props => props.defualtDisabled && 'rgba(71, 221, 1, 0.17)'} !important; 
    border: ${props => props.defualtDisabled && 'none'} !important;
    color:${props => props.defualtDisabled && '#7D7D7D'} !important; 

    background:${props => props.insertionError && '#e0ccae'} !important; 
    border: ${props => props.insertionError && '1px solid #dbb780'} !important;
    color:${props => props.insertionError && '#7D7D7D'} !important; 
    

    opacity:${props => props.disabled && '0.4'} !important; 
`

const Table = styled.div`
overflow-x:auto;
overflow-y:auto;
height: 100%;
${Scroll};
border-collapse: separate;
display: flex;

.col-plus{
}

.header{
    font-weight: 600;
    font-size: 15px;
    height: 20px;
    display: flex;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #C7C4C4;
    
}

.content-grid{
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}


input{
    font-weight: 600;
    font-size: 15px;
    height: auto !important;
    outline: none;
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
    -webkit-appearance: none;
    background: transparent;
    border-bottom: 1px solid;
    width: 20px;
    text-align: center;
}

.content{
    padding:5px;
    padding-top:10px;
    row-gap: 10px;
    display: flex;
    flex-direction: column;
    background: #FFF;
}

.content-items{
    display: flex;
    flex-direction: column;
    row-gap: 5px;
}

.header-plus{
    width: 15px;
    padding: 12px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #FCA350;
    display: flex;
    cursor:pointer;
    color: #000;
    font-size: 16px;
    font-weight: 600;

    ${Hover};
}

.col{
    border-radius: 4px;
    background: #FFF;
    box-shadow: 0px 0px 20px 0px rgba(56, 71, 109, 0.03);
    #FFFFFF;
    width: 150px;
    min-width: 150px;
}

.title{
    color: #121212;
    text-align: right;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
`

export { Table, Vowel }