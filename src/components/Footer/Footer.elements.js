import styled from 'styled-components/macro'

export const FooterContainer = styled.div`
    width: 100vw;
    height: 50vh;
    position: absolute;
`

export const LomaRound = styled.img`
    width: 100%;
    height: 50vh;
    object-fit: cover;
    display: block;
    z-index: -1;
    
    @media screen and (max-width: 991px) {
    object-fit: cover;
    width: 100%;
}
`

export const BlackSection = styled.div`
    width: 100%;
    height: 50vh;
    background-color: #000;
    
    @media screen and (max-width: 991px) {
    outline: 1px solid #000;
}
`

export const LomaType = styled.img`
    margin-top: 70px;
    width: 100%;
    height: 130px;
`


export const FooterTextContainer = styled.div` 
width: 110px;
height: 50px;
margin-left: 10%;
cursor: pointer;
position: relative;
text-decoration: none;
pointer-events: all;
transition: all .2s ease-in-out;
margin-top: 19vh;
z-index: 15;
border-radius: 50px;
display: inline-block;
vertical-align: center;
border: 1px solid #000;

&:hover {
    border: 1px solid #fff;
}

@media screen and (max-width: 1500px) {
    margin-top: 13vh;

&:hover {
    border: 1px solid #000;
}
}
`

export const FooterTextContainerRight = styled(FooterTextContainer)`
    float: right;
    margin-right: 10%;
`

export const TextWrapper = styled.h4`
    font-weight: 800;
    font-size: 1em;
    color: #fff;
    width: 100%;
    text-align: center;
    line-height: 48px;
    vertical-align: center;

    @media screen and (max-width: 991px) {
    display: none;
}
`