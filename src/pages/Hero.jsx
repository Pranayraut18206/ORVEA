import React from 'react'
import Hero_Left from '../components/hero/Hero_Left'
import Hero_Right from '../components/hero/Hero_Right'
import Hero_Front from '../components/hero/Hero_Front'
import Unique from '../components/hero/Unique'
import Why from '../components/hero/Why'

const Hero = () => {
    return (
        <div>
            <div className='flex gap-1 mt-1' >
                <Hero_Left/>
                <Hero_Right/>
                <Hero_Front/>
                </div>
            <Unique/>
            <Why/>
        </div>


    )
}

export default Hero
