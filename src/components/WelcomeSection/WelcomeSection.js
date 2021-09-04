import React, {useEffect, useState} from 'react'
import {
    WelcomeContainer,
    LomaArray,
    LomaType,
    Arc
} from './WelcomeSection.elements' 
import { Loader } from '../../globalStyles';

import Image1 from '../../assets/arc-s-01.svg'
import Image2 from '../../assets/loma-type-black.svg'
import Image3 from '../../assets/welcome-array-03.jpg'

const Welcome = ({loading, setLoading}) => {
    const [enterFirst, setEnterFirst] = useState(true)
    const [enterSecond, setEnterSecond] = useState(true)
    const [enterThird, setEnterThird] = useState(true)
    useEffect(() => {
      setTimeout(() => {
        setEnterFirst(false)
      }, 500);

      setTimeout(() => {
        setEnterSecond(false)
      }, 1200);

      setTimeout(() => {
        setEnterThird(false)
      }, 1200);
    }, [])
    return (
        <>            
            <Loader loading={loading}/>
            <WelcomeContainer>
                <LomaType src={Image2} enter={enterSecond}/>
                <Arc src={Image1} enter={enterThird}/>
                <LomaArray src={Image3} enter={enterFirst}/>
            </WelcomeContainer>
        </>
    )
}

export default Welcome;
