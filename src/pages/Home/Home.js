import React, {useState} from 'react';
import { WelcomeSection, Pictures, Showcase, Footer, CustomizeButton, InfoSection } from '../../components';

const Home = () => {  

    const [scrolledDown, setNavbar] = useState(false);
    
    const changeBackground = () => {
        if (window.scrollY >= 90) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    
    window.addEventListener('scroll', changeBackground);

    const [loading, setLoading] = useState(false)
    return (
        <>
            <CustomizeButton loading={loading} setLoading={setLoading} scrolledDown={scrolledDown} setNavbar={setNavbar}/>
            <WelcomeSection loading={loading} scrolledDown={scrolledDown}/>
            <Footer />
        </>
    )
}

export default Home;