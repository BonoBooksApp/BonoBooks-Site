import Hero from '../layouts/Hero';
import About from '../layouts/About';
import Embed from '../layouts/Embed';
import { Fragment } from 'react';
const HomePage = () => {
    return (
        <Fragment>
            <Hero/>
            <About/>
            <Embed embedId="grzI7N0DVms"/>
        </Fragment>
    )
}

export default HomePage