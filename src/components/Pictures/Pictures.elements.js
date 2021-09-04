import styled from 'styled-components/macro'

export const GalleryWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    overflow: hidden;
    padding: 100px;

    @media screen and (max-width: 991px) {
        padding: 20px;
        height: 90%;
        margin-top: 35px;
    }
`

export const BaseImg = styled.img`
    object-fit: cover;
    text-align: right;
    padding: 0.5vh;
    display: block;
    float: left;
    opacity: 1;
    position: relative;
`

export const Img66 = styled(BaseImg)`
    width: 60%;
    height: 90vh;
    height: ${({shorten}) => (shorten ? '45vh' : '90vh')};
    padding: ${({editPadding}) => (editPadding)}; 

    @media screen and (max-width: 991px) {
        width: 100%;
        height: 75vw;
    }
`

export const Img33 = styled(BaseImg)`
    width: 40%;
    height: 45vh;    

    @media screen and (max-width: 991px) {
        width: 50%;
        height: 50vw;
    }
`