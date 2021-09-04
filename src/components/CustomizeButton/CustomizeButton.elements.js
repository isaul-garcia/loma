import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const ButtonsContainer = styled.div`
    width: 100%;
    position: sticky;
    margin-top: 3.5em;
    bottom: 0;
    transition: all 0.8s ease-in-out;
    opacity: ${({enter}) => (enter ? '0' : '1')};
`

export const HoveringButton = styled.div` 
    width: 210px;
    height: 50px;
    margin-left: 10%;
    cursor: pointer;
    position: absolute;
    background-color: ${({scrolledDown}) => (scrolledDown ? '#000' : '#e9b501')};
    text-decoration: none;
    pointer-events: all;
    transition: all .2s ease-in-out;
    bottom: 2em;
    z-index: 9;
    border-radius: 50px;
    vertical-align: center;

    &:hover {
        background-color: #141414;
    }
    
    @media screen and (max-width: 991px) {
    margin-left: 5.75%;
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
}
`

export const ButtonText = styled.h4`
    font-weight: 800;
    font-size: 1em;
    color: #fff;
    width: 100%;
    text-align: center;
    line-height: 50px;
    vertical-align: center;
`