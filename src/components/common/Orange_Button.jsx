import React, { useRef } from 'react'
import gsap from 'gsap'

const Orange_Button = (props) => {

    const btnRef = useRef(null)

    const handleEnter = () => {
        gsap.fromTo(
            btnRef.current,
            { y: 0 },
            {
                y: -3,
                duration: 0.2,
                ease: "power2.out",
                yoyo: true,
                repeat: 1
            }
        )
    }

    return (
        <div>
            <div className='flex justify-center mt-3 font-[font4]'>
                <button
                    ref={btnRef}
                    onMouseEnter={handleEnter}
                    onClick={props.onClick}
                    className='
                        w-[15vw] 
                        bg-orange-500 
                        p-2 
                        uppercase 
                        rounded-xl 
                        leading-[2vw] 
                        text-white 
                        font-bold

                        transition-colors duration-200
                        hover:bg-[#2A292B]
                        active:scale-95
                    '
                >
                    {props.text}
                </button>
            </div>
        </div>
    )
}

export default Orange_Button