import styled from "styled-components";
import { Hover } from "styles/GlobalCss";

const Table = styled.div`

border-collapse: separate;
display: flex;
.row{
    border-radius: 6px;
    border: 0.5px dashed #E4E6EF;
    background: rgba(245, 248, 250, 0.30);
    padding: 10px;
    display: block;
    color: #7D7D7D;
    text-align: right;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

}

.col-plus{
}

.header{
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

export { Table }