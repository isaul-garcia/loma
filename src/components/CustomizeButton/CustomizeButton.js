import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { BiDownArrowAlt } from 'react-icons/bi';
import { IconContext } from 'react-icons/lib';
import {
    ButtonsContainer,
    HoveringButton,
    HoveringButtonRight,
    ButtonText
} from './CustomizeButton.elements' 

const Welcome = ({loading, setLoading}) => {
    const [scrolledDown, setNavbar] = useState(false);
    
    const changeBackground = () => {
        if (window.scrollY >= 90) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    
    window.addEventListener('scroll', changeBackground);

    const history = useHistory();
    const [enterLate, setEnterLate] = useState(true)  
    useEffect(() => {
      setTimeout(() => {
        setEnterLate(false)
      }, 1200);
    }, [])
    
    const redirect = () => {
        setLoading(true); 
        setTimeout(() => {history.push('/CustomizeLoma')}, 500);
    }
    return (
        <>
            <IconContext.Provider value={{ color: '#fff', size: 35 }}>
                <ButtonsContainer enter={enterLate}>
                    <HoveringButton scrolledDown={scrolledDown} onClick={redirect}>
                        <ButtonText>Customize Your Loma</ButtonText>
                    </HoveringButton>
                    <HoveringButtonRight scrolledDown={scrolledDown} ><ButtonText><BiDownArrowAlt /></ButtonText></HoveringButtonRight>
                </ButtonsContainer>
            </IconContext.Provider>
        </> 
    )
}

export default Welcome;
