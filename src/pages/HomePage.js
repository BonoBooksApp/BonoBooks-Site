import Hero from '../layouts/Hero';
import About from '../layouts/About';
import { Fragment } from 'react';
const HomePage = () => {
    return (
        <Fragment>
            <Hero/>
            <About/>
        </Fragment>
    )
}

export default HomePage