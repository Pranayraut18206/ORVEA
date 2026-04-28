import React, { useRef, useState } from 'react'
import gsap from 'gsap'

const Navigation = () => {
  const dropdownRef = useRef(null)
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    const el = dropdownRef.current

    if (!open) {
      gsap.fromTo(
        el,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        }
      )
    } else {
      gsap.to(el, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      })
    }

    setOpen(!open)
  }

  return (
    <div className="w-full p-2 bg-[#f5f2eb] text-[#2A292B]">

      {/* NAVBAR */}
      <div className="flex justify-between items-center px-10 py-4">

        {/* LOGO */}
        <div className="text-2xl font-black tracking-tight">
          wimp
        </div>

        {/* NAV LINKS */}
        <div className="flex gap-8 items-center">

          <div>
          <button
            onClick={toggleMenu}
            className="hover:opacity-70 transition font-bold flex items-center gap-2"
          >
            Decaf Menu <img className='h-4 w-4 mt-0.5' src="src/assets/arrow-down-sign-to-navigate.png" alt="" />
          </button>
          </div>

          <p className="cursor-pointer hover:opacity-70">The Blog</p>
          <p className="cursor-pointer hover:opacity-70">Why Decaf</p>
          <p className="cursor-pointer hover:opacity-70">FAQs</p>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex gap-5">
          <button className='hover:bg-gray-300 p-2 rounded-xl'><img className='h-5 w-5' src="src/assets/user.png" alt="" /></button>
          <button className='hover:bg-gray-300 p-2 rounded-xl'><img className='h-5 w-5' src="src/assets/grocery-store.png" alt="" /></button>
        </div>

      </div>

      {/* DROPDOWN (IMPORTANT PART) */}
      <div
        ref={dropdownRef}
        className="overflow-hidden h-0 px-10"
      >
        <div className="flex items-center justify-center gap-10 py-6 bg-[#f5f2eb] border-t">

          <div className="p-4 rounded-xl hover:bg-white transition cursor-pointer">
            <div className="h-20 bg-gray-200 rounded mb-3"></div>
            <p className="font-medium">Welcome Pack</p>
          </div>

          <div className="p-4 rounded-xl hover:bg-white transition cursor-pointer">
            <div className="h-20 bg-gray-200 rounded mb-3"></div>
            <p className="font-medium">Single Bags</p>
          </div>

          <div className="p-4 rounded-xl hover:bg-white transition cursor-pointer">
            <div className="h-20 bg-gray-200 rounded mb-3"></div>
            <p className="font-medium">Gift Cards</p>
          </div>

          <div className="p-4 rounded-xl hover:bg-white transition cursor-pointer opacity-50">
            <div className="h-20 bg-gray-200 rounded mb-3"></div>
            <p className="font-medium">Merch (Coming Soon)</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Navigation