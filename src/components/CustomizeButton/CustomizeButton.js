import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import { HiViewGrid } from 'react-icons/hi';
import { IconContext } from 'react-icons/lib';
import {
    ButtonsContainer,
    HoveringButton,
    HoveringButtonRight,
    ButtonText
} from './CustomizeButton.elements' 

const Welcome = ({loading, setLoading, scrolledDown, setNavbar}) => {

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
            <IconContext.Provider value={{ color: '#dcdcdc', size: 27.5 }}>
                <ButtonsContainer enter={enterLate}>
                    <HoveringButton scrolledDown={scrolledDown} onClick={redirect}>
                        <ButtonText>Customize Your Loma</ButtonText>
                    </HoveringButton>
                    <HoveringButtonRight scrolledDown={scrolledDown} >
                        <ButtonText isIcon={true}><HiViewGrid /></ButtonText>
                    </HoveringButtonRight>
                </ButtonsContainer>
            </IconContext.Provider>
        </> 
    )
}

export default Welcome;
