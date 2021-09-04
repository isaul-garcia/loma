import styled from 'styled-components/macro'

export const WelcomeContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #dbdbdb;
`

export const Arc = styled.img`
    position: absolute;
    width: 90%;
    margin-left: 5%;
    z-index: 0;
    transition: all 0.8s ease-in-out;
    opacity: ${({enter}) => (enter ? '0' : '1')};

    @media screen and (max-width: 1500px) {
        width: 100%;
        margin-left: 0%;
    }
    @media screen and (max-width: 991px) {
        display: none;
    }
`

export const LomaArray = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    transition: all 0.4s ease-in-out;
    opacity: ${({enter}) => (enter ? '0' : '1')};
`

export const LomaType = styled.img`
position: absolute;
    width: 100%;
    height: 28vh;
    margin-top: 55px;
    z-index: 0;
    transition: all 0.8s ease-in-out;
    opacity: ${({enter}) => (enter ? '0' : '1')};
`