import React, {useState} from 'react';
import { WelcomeSection, Pictures, Showcase, Footer, CustomizeButton } from '../../components';

const Home = () => {  
    const [loading, setLoading] = useState(false)
    return (
        <>
            <WelcomeSection loading={loading}/>
            <Pictures />
            <Showcase />
            <CustomizeButton loading={loading} setLoading={setLoading} />
            <Footer />
        </>
    )
}

export default Home;