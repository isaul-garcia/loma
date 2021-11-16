import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components/macro'
import Image1 from './assets/loma-type-light.svg'

const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }    

    body {
        background-color: #ffffff;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-overflow-scrolling: auto;
        font-family: "IBM Plex Sans KR", sans-serif;
        height: 100%;
        width: 100%;
        overflow-x: hidden;
        
        @media screen and (max-width: 991px) {
            overflow: hidden;
        }
    }
`

export const Loader = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 999;
    background-image: url(${Image1});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center; 
    background-color: #000;
    background-size: 300px;
    transition: all .4s ease-in-out;
    opacity: ${({loading}) => (loading ? '1' : '0')};
    pointer-events: ${({loading}) => (loading ? 'all' : 'none')};
`

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto;
margin-left: auto;
margin-top: ${({topspacing}) => (topspacing ? '97px' : '0px')};
padding-right: 50px;
padding-left: 50px;

@media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
}

@media screen and (max-width: 1280px) {
    margin-top: 0px;
}
`;

export const LinkArrowButton = styled.button`
border-radius: 18px;
background: rgba(240,240,20,0);
white-space: nowrap;
color: #444;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
transition: transform 0.2s;
margin-bottom: ${({shortDesc}) => (shortDesc ? '60px' : '0px')};

&:hover {
    transform: translate(20px, 0px);
    opacity: 0.5;
}

@media screen and (max-width: 960px) {
    width:100%;
    text-align: left;
    font-size: 18px;
}
`;

export default GlobalStyle