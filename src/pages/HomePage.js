import Hero from '../layouts/Hero';
import About from '../layouts/About';
import Embed from '../layouts/Embed';
import Testemonials from '../layouts/Testemonials';
import { Fragment } from 'react';
import HScroll from '../layouts/HScroll';
const HomePage = () => {
    return (
        <Fragment>
            <Hero/>
            {/* <About/> */}
            <HScroll/>
            <Embed embedId="grzI7N0DVms"/>
            <Testemonials/>
        </Fragment>
    )
}

export default HomePage