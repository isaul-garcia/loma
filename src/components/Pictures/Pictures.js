import React from 'react'
import {
    GalleryWrapper,
    Img66,
    Img33
} from './Pictures.elements' 

import Image1 from '../../assets/loma1.jpg'
import Image2 from '../../assets/loma2.jpg'
import Image3 from '../../assets/loma3.jpg'
import Image4 from '../../assets/sections.jpg'
import Image5 from '../../assets/shells.jpg'

const Pictures = () => {
    return (
        <>
            <GalleryWrapper>
                <Img66 src={Image1} />
                <Img33 src={Image4} />
                <Img33 src={Image5} />
            </GalleryWrapper>
        </>
    )
}

export default Pictures;
