import React from 'react'
import Hero_Left from '../components/hero/Hero_Left'
import Hero_Right from '../components/hero/Hero_Right'
import Hero_Front from '../components/hero/Hero_Front'
import Unique from '../components/hero/Unique'

const Hero = () => {
    return (
        <div>
            <div className='flex gap-1 mt-1' >
                <Hero_Left/>
                <Hero_Right/>
                <Hero_Front/>
                </div>
            <Unique/>
        </div>


    )
}

export default Hero
