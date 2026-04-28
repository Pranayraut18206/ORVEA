import React from 'react'
import Orange_Button from '../common/Orange_Button'

const Hero_Right = () => {
    return (
            <div className='flex gap-1'>

                {/* {right} */}
                <div className='bg-[#F9F4ED] w-[63vw] h-[45vw] rounded-4xl'>
                    <h1 className='text-[6vw] leading-[0.85] text-center font-[font2] mt-60 font-bold text-[#2A292B]'>Rethink <br />
                        Decaf</h1>
                    <div className='gap-2'>
                        <p className='text-center text-xl mt-10 font-[font5] text-[#2A292B]'>"The best decaf I've ever tasted"</p>
                        <p className='text-[1vw] text-center text-xl mt-3 font-[font5] text-[#2A292B]'><span className='text-orange-500'>&#9733; &#9733; &#9733; &#9733; &#9733;</span> &nbsp;4.8/5</p></div>

                    <div className=' flex justify-center mt-3 font-[font4]'>
                        <Orange_Button text="TRY A WELCOME PACK"/>
                    </div>

                </div>

            </div>
            )
}

            export default Hero_Right
