import React from 'react'
import Hero_Left from '../components/hero/Hero_Left'
import Hero_Right from '../components/hero/Hero_Right'
import Hero_Front from '../components/hero/Hero_Front'

const Hero = () => {
    return (
        <div className='flex gap-1 mt-1' >
            <Hero_Left/>
            <Hero_Right/>
            <Hero_Front/>
            </div>


    )
}

export default Hero
