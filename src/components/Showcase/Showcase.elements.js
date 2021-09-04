import styled from 'styled-components/macro'

export const GalleryWrapper = styled.div`
    width: 99vw;
    height: 100%;
    display: block;
    position: relative;
    overflow: hidden;
    padding: 100px;

@media screen and (max-width: 991px) {
    padding: 20px;
    height: 95%;
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

export const Img33 = styled(BaseImg)`
    width: 35%;
    height: 45vh;    

    @media screen and (max-width: 991px) {
        width: 50%;
        height: 60vw;
    display: ${({mobile}) => (mobile ? 'none' : '')};
    }
`

export const Img15 = styled(BaseImg)`
    width: 15%;
    height: 45vh;    

@media screen and (max-width: 991px) {
    width: 50%;
    height: 60vw;
    display: ${({mobile}) => (mobile ? 'none' : '')};
}
`

export const Img30 = styled(BaseImg)`
    width: 35%;
    height: 22.5vh;    

@media screen and (max-width: 991px) {
    width: 50%;
    height: 30vw;  
    display: ${({mobile}) => (mobile ? 'none' : '')};
}
`

export const Img25 = styled(BaseImg)`
    width: 15%;
    height: 22.5vh;   

@media screen and (max-width: 991px) {
    width: 25%;
    height: 30vw;   
    display: ${({mobile}) => (mobile ? 'none' : '')};
} 
`