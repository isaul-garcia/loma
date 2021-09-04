import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const Section = styled.div`
    width: 100%;
    height: 100%;
    background-color: #000;
    overflow: hidden;
`

export const ModelWindow = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
    background-color: #f0f0f0;
    border: 1px solid #a2a2a2;
    border-radius: 30px;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    transition: all 0.5s ease-in-out;
    width: ${({stepTwo}) => (stepTwo ? '50%' : '100%')};
    
    @media screen and (max-width: 991px) {
        border-radius: 34px;
        width: 100%;
        height: 75%;
        height: ${({stepTwo}) => (stepTwo ? '75%' : '100%')};
    }
`

export const LomaLogotype = styled.img`
    width: 100%;
    height: 70px;
    position: absolute;
    z-index: 14;
`

export const UiWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #d1d1d1;
    border-radius: 35px;
    padding: 0.5%;
    position: relative;
    user-select: none;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    width: ${({stepThree}) => (stepThree ? '50%' : '100%')};
    
    @media screen and (max-width: 991px) {
        border-radius: ${({stepThree}) => (stepThree ? '35px' : '35px 35px 0px 0px')};
        width: ${({stepThree}) => (stepThree ? '100%' : '100%')};
    }
`

export const Settings = styled.div`
    width: 50%;
    height: 100%;
    display: inline-block;
    position: relative;
    vertical-align: top;
    padding: 10px;
    transition: all 0.5s ease-in-out;
    
    @media screen and (max-width: 991px) {
        width: 100%;
        height: 25%;
        margin-top: 0;
        margin-left: 0;
        overflow-y: scroll;
        margin-top: 1px;
        opacity: ${({stepThree}) => (stepThree ? '0' : '1')};
        pointer-events: ${({stepThree}) => (stepThree ? 'none' : 'all')};
    }
`

export const Container = styled.div`
    width: 68vw;
    height: 78.5vh;
    margin-top: 10.5vh;
    margin-left: 16vw;
    position: absolute;
    transition: all 0.5s ease-in-out;
    margin-left: ${({stepThree}) => (stepThree ? '32.5vw' : '')};

    @media screen and (max-width: 991px) {
        width: 100vw;
        height: 100vh;
        margin-top: 0;
        margin-left: 0;
    }
`

export const SelectionName = styled.div`
    color: #666666;
    background-color: #f0f0f099;
    border: 1px solid #66666699;
    padding: 13px;
    border-radius: 20px;
    margin: 13px;
    bottom: 0;
    position: absolute;
    z-index: 15;
    transition: all .5s ease-in-out;
    opacity: ${({stepThree}) => (stepThree ? '0' : '1')};
    pointer-events: ${({stepThree}) => (stepThree ? 'none' : 'all')};

    @media screen and (max-width: 991px) {
        border-radius: 50px;
    }
    
`

export const BigButton = styled.div`
    color: #666666;
    background-color: #666;
    border-radius: 50px;
    position: absolute;
    z-index: 15;
    transition: all 0.5s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: #999;
    }
`

export const BackButton = styled(BigButton)`
    padding: 7px 10px;
    height: 50px;
    line-height: 50px;
    background-color: #444444;
    margin-top: 3vh;
    margin-left: 16vw;
    margin-left: ${({stepThree}) => (stepThree ? '32.5vw' : '')};

    &:hover{      
        background-color: #333;
    }

    @media screen and (max-width: 991px) {
        padding: 3px 5px;
        height: 40px;
        line-height: 50px;
        margin-left: 3.5vw;
        margin-top: 3.5vw;
        opacity: ${({stepThree}) => (stepThree ? '0' : '1')};
        pointer-events: ${({stepThree}) => (stepThree ? 'none' : 'all')};
    }
`

export const BackBottom = styled(BigButton)`
    padding: 7px 10px;
    margin-top: 0;
    bottom: 3vh;
    border-radius: 50px;
    margin-left: 16vw;
    margin-left: ${({stepThree}) => (stepThree ? '32.5vw' : '')};
    opacity: ${({stepThree}) => (stepThree ? '1' : '0')};
    pointer-events: ${({stepThree}) => (stepThree ? 'all' : 'none')};
    
    @media screen and (max-width: 991px) {
        margin-left: ${({stepThree}) => (stepThree ? '3.5vw' : '')};
        bottom: 2.5vh;
    }
`

export const FinishButton = styled(BigButton)`
    color: #fff;
    background-color: #efba01;
    border-radius: 50px;
    right: 16vw;
    padding: 13px 21px;
    right: ${({stepThree}) => (stepThree ? '32.75vw' : '')};
    opacity: ${({stepTwo}) => (stepTwo ? '1' : '0')};
    pointer-events: ${({stepTwo}) => (stepTwo ? 'all' : 'none')};

    &:hover{      
        background-color: #b68d01;
    }

    @media screen and (min-width: 991px) {
        bottom: 3vh;
    }

    @media screen and (max-width: 991px) {
        top: 2.25vh;
        right: 3.5vw;
        padding: 9px 21px;
    }
`

export const NextButton = styled(FinishButton)`
    background-color: #efba01;
    padding: 14px 21px;
    opacity: ${({stepOne}) => (stepOne ? '1' : '0')};
    pointer-events: ${({stepOne}) => (stepOne ? 'all' : 'none')};

    &:hover{      
        background-color: #b68d01;
    }
`

export const OrderButton = styled(BigButton)`
    background-color: #5a74da;
    padding: 13px 21px;
    color: #fff;
    right: ${({stepThree}) => (stepThree ? '33.5vw' : '')};
    opacity: ${({stepThree}) => (stepThree ? '1' : '0')};
    pointer-events: ${({stepThree}) => (stepThree ? 'all' : 'none')};
    user-select: none;

    &:hover{      
        background-color: #4260d5;
    }
    
    @media screen and (min-width: 991px) {
        bottom: 3vh;
    }

    @media screen and (max-width: 991px) {
        bottom: 2.5vh;
        right: 3.5vw;
        padding: 12px 24px;
    }
`

export const SitButton = styled.div`
    height: 100px;
    flex: 33.33%;
    margin: 7px;  
    border-radius: 10px;
    background-color: #e9e9e9;
    display: inline-block;
    cursor: pointer;
    border: ${({active}) => (active ? '1px solid #8f8f8f' : '1px solid #b9b9b9')};

    &:hover {
        border: 1px solid #8f8f8f;
        background-color: #e2e2e2;
    }

    @media screen and (max-width: 991px) {
        height: 75px;
    }
`

export const InsideButton = styled.img`
    height: 100%;
    padding: 10px;
    z-index: 14;
    opacity: 0.4;
    border-radius: 9px;
    border: ${({active}) => (active ? '3px solid #2e2e2e' : '3px solid #2e2e2e00')};

    &:hover {
        border: 3px solid #2e2e2e;
    }
`

export const SitSettings = styled.div`
    @media screen and (max-width: 991px) {
        display: ${({mobilePage}) => (mobilePage ? 'inline-block' : 'none')};
    }
`

export const LegSettings = styled.div`
    @media screen and (max-width: 991px) {
        display: ${({mobilePage}) => (mobilePage ? 'inline-block' : 'none')};
    }
`

export const ColorSettings = styled.div`
@media screen and (max-width: 991px) {
    display: ${({mobilePage}) => (mobilePage ? 'inline-block' : 'none')};
}
`

export const SettingButtons =styled.span`
    display: none;
    opacity: ${({stepThree}) => (stepThree ? '0' : '1')};
    pointer-events: ${({stepThree}) => (stepThree ? 'none' : 'all')};

    @media screen and (max-width: 991px) {
        display: inline;
        z-index: 15;
        transition: all 0.5s ease-in-out;
        height: 45px;
        width: 45px;
        text-align: center;
        line-height: 45px;
        border-radius: 35px;
        color: #666666;
        background-color: #f0f0f099;
        border: 1px solid #66666699;
        position: inline;
        cursor: pointer;
        padding: 14px 20px;
        background-color: ${({active}) => (active ? '#b7b7b799' : '#f0f0f099')};
    }
`

export const SettingsMobilePages =styled.div`
    z-index: 50;
    position: absolute;
    right: 3.5vw;
    bottom: 28vh;
    user-select: none;
    pointer-events: auto;
    opacity: ${({stepThree}) => (stepThree ? '0' : '1')};
    pointer-events: ${({stepThree}) => (stepThree ? 'none' : 'all')};
`