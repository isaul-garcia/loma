import React from 'react'
import {
    GalleryWrapper,
    Img33,
    Img15,
    Img30,
    Img25,
} from './Showcase.elements' 
import Image1 from '../../assets/ss1.jpg'
import Image2 from '../../assets/ss2.jpg'
import Image3 from '../../assets/ss3.jpg'
import Image4 from '../../assets/ss4.jpg'
import Image5 from '../../assets/ss5.jpg'
import Image6 from '../../assets/ss6.jpg'
import Image7 from '../../assets/ss7.jpg'
import Image8 from '../../assets/ss8.jpg'
import Image9 from '../../assets/ss9.jpg'
import Image10 from '../../assets/ss10.jpg'
import Image11 from '../../assets/ss11.jpg'
import Image12 from '../../assets/ss12.jpg'
import Image13 from '../../assets/ss13.jpg'

const Pictures = () => {
    return (
        <>
            <GalleryWrapper>
                <Img33 src={Image1} />
                <Img30 src={Image2} />
                <Img25 src={Image3} />
                <Img25 src={Image4} />
                <Img25 src={Image5} />
                <Img30 src={Image6} />
                <Img25 src={Image7} />
                <Img15 src={Image8} />
                <Img33 mobile={true} src={Image13} />
                <Img25 mobile={true} src={Image10} />
                <Img30 src={Image11} />
                <Img30 src={Image12} />
                <Img25 mobile={true} src={Image9} />
            </GalleryWrapper>
        </>
    )
}

export default Pictures;
