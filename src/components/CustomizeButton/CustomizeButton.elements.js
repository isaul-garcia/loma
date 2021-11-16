import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const ButtonsContainer = styled.div`
    width: 100%;
    position: absolute;
    transition: all 0.8s ease-in-out;
    opacity: ${({enter}) => (enter ? '0' : '1')};
`

export const HoveringButton = styled.div` 
    width: 243px;
    height: 50px;
    margin-left: 10%;
    margin-top: 5em;
    cursor: pointer;
    position: absolute;
    background-color: ${({scrolledDown}) => (scrolledDown ? '#000' : '#4060e1')};
    opacity: ${({scrolledDown}) => (scrolledDown ? '0' : '1')};
    text-decoration: none;
    pointer-events: all;
    transition: all .2s ease-in-out;
    z-index: 9;
    border-radius: 50px;
    vertical-align: center;
    animation-name: buttonPalette;
    animation-duration: 0.2s;

    &:hover {
        background-color: #232323;
    }
    
    @media screen and (max-width: 991px) {
        width: 250px;
        margin-top: 35px;
        bottom: -94.5vh;
    margin-left: 5%;
    }
`

export const HoveringButtonRight = styled(HoveringButton)`
    float: right;
    right: 0;
    margin-right: 10%;
    width: 50px;
    padding: 6px;
    background-color: #111111;
    cursor: auto;
    opacity: ${({scrolledDown}) => (scrolledDown ? '0' : '1')};
    
    @media screen and (max-width: 991px) {
        margin-right: 5.75%;
        margin-top: -35px;
    }
`

export const ButtonText = styled.h4`
    font-weight: 800;
    font-size: 1.25em;
    color: #fff;
    width: 100%;
    text-align: center;
    line-height: ${({isIcon}) => (isIcon ? '51px' : '50px')};
    vertical-align: center;
`