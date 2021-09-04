import React from 'react'
import {
    FooterContainer,
    LomaRound,
    BlackSection,
    LomaType,
    FooterTextContainer,
    FooterTextContainerRight,
    TextWrapper
} from './Footer.elements' 
import Image2 from '../../assets/loma-type-light.svg'
import Image3 from '../../assets/round.jpg'

const Welcome = () => {    
    return (
        <>
            <FooterContainer>
                {/*<LomaRound src={Image3} />*/}
                <BlackSection>
                    <LomaType src={Image2} />
                    <FooterTextContainer>
                        <TextWrapper>Contact</TextWrapper>
                    </FooterTextContainer>
                    <FooterTextContainerRight>
                        <TextWrapper>About</TextWrapper>
                    </FooterTextContainerRight>
                </BlackSection>
            </FooterContainer>
        </>
    )
}

export default Welcome;
