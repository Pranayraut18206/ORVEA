import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full p-2 bg-[#f5f2eb] text-[#2A292B]">

      {}
      <div className="flex justify-between items-center px-10 py-4">

        {}
        <Link to="/">
          <img src="src/assets/wimp-logo_200x60@2x.webp" alt="wimp" className="h-10" />
        </Link>

        {}
        <div className="flex gap-8 items-center ">
          <div className='hover:opacity-70 cursor-pointer hover:underline hover:font-bold'>
            <button
              onClick={() => setOpen(!open)}
              className="hover:opacity-70 transition font-bold flex items-center gap-2"
            >
              Decaf Menu
              <img
                className={`h-4 w-4 mt-0.5 transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
                src="src/assets/arrow-down-sign-to-navigate.png"
                alt=""
              />
            </button>
          </div>

          <p className=" hover:opacity-70 cursor-pointer hover:underline hover:font-bold">The Blog</p>
          <a href='#why-decaf'><button className=" hover:opacity-70 cursor-pointer hover:underline hover:font-bold">Why Decaf</button></a>
          <Link to="/faq"><p className=" hover:opacity-70 cursor-pointer hover:underline hover:font-bold">FAQs</p></Link>
        </div>

        {}
        <div className="flex gap-5">
          <Link to="/login">
            <button className='hover:bg-gray-300 p-2 rounded-xl'>
              <img className='h-5 w-5' src="src/assets/user.png" alt="" />
            </button>
          </Link>

          <Link to="/cart">
            <button className='hover:bg-gray-300 p-2 rounded-xl'>
              <img className='h-5 w-5' src="src/assets/grocery-store.png" alt="" />
            </button>
          </Link>
        </div>

      </div>

      {}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out px-10 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex items-center justify-center gap-10 py-6 bg-[#f5f2eb] border-t">

          <div className="p-4 rounded-xl hover:bg-white transition cursor-pointer">
            <img className="h-20 bg-gray-200 rounded mb-3" src="https://www.wimpdecaf.com/cdn/shop/files/wimp-taster_400x.png?v=1745761010" alt="" />
            <p className="font-medium">Welcome Pack</p>
          </div>

          <div className="p-4 rounded-xl hover:bg-white transition cursor-pointer">
            <img className="h-20 bg-gray-200 rounded mb-3" src="https://www.wimpdecaf.com/cdn/shop/files/wimp-single-bags_400x.png?v=1745761010" alt="" />
            <p className="font-medium">Single Bags</p>
          </div>

          <div className="p-4 rounded-xl hover:bg-white transition cursor-pointer">
            <img className="h-20 bg-gray-200 rounded mb-3" src="https://www.wimpdecaf.com/cdn/shop/files/wimp-gift-cards_400x.png?v=1745761070" alt="" />
            <p className="font-medium">Gift Cards</p>
          </div>

          <div className="p-4 rounded-xl hover:bg-white transition cursor-pointer opacity-50">
            <img className="h-20 bg-gray-200 rounded mb-3" src="https://www.wimpdecaf.com/cdn/shop/files/CleanShot_2025-01-14_at_11.04.44_2x_1_400x.png?v=1736870867" alt="" />
            <p className="font-medium">Merch (Coming Soon)</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Navigation