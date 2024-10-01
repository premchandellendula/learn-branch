import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black'>
        <div className='text-white flex justify-center'>
            Privacy Policy | © {new Date().getFullYear()} LogoReveal <br />{" "}
        </div>
    </div>
  )
}

export default Footer