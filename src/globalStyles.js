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

export default GlobalStyle