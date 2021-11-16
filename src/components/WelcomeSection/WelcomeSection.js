import React, {useEffect, useState} from 'react'
import {
    WelcomeContainer,
    LomaArray,
    LomaType,
    Arc,
    TypeContainer
} from './WelcomeSection.elements' 
import { Loader } from '../../globalStyles';

import Image1 from '../../assets/arc-s-01.svg'
import Image2 from '../../assets/loma-type-black-01.svg'
import Image3 from '../../assets/loma-3d-type.png'
import Image4 from '../../assets/loma-arr-10.png'

const Welcome = ({loading, setLoading, scrolledDown}) => {
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
                <TypeContainer>
                  <LomaType src={Image3} enter={enterSecond}/>
                </TypeContainer>
                <LomaArray src={Image4} enter={enterFirst}/>
            </WelcomeContainer>
        </>
    )
}

export default Welcome;
