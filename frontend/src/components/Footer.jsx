import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
     
      <div className='grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        
        {/* -----------Left Section (Column 1)----------- */}
        <div className='flex flex-col gap-4'> {/* Use flex-col for stacking logo and text */}
            <img className='w-[150px]' src={assets.logo} alt="Prescripto Logo" /> {/* Added class for image width */}
            <p className='text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit assumenda placeat at aperiam nobis, eius sapiente voluptate minima veritatis magnam. Veniam aliquam dignissimos illo eius iste? Recusandae qui nam corporis!
            </p>
        </div>

        {/* ---------------Centre Section (Column 2)------------- */}
        <div className='flex flex-col gap-4'> {/* Added class for spacing */}
            <p className='font-medium text-lg mb-2'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-500'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        {/* -----------Right section (Column 3)-----------*/}
        <div className='flex flex-col gap-4'> {/* Added class for spacing */}
            <p className='font-medium text-lg mb-2'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-500'>
                <li>+91- 9338828383</li>
                <li>gotebolegmail.com</li>
            </ul>
        </div>

      </div> 

      {/* -----------Copyright and Divider section -----------*/}
      <div className='py-6 border-t border-gray-300 mt-10'>
          {/* Note: In your original code, the paragraph text here was placeholder. */}
          <p className='text-center text-sm text-gray-500'>Copyright 2024@ Prescripto - All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Footer;