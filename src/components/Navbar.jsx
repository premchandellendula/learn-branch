import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-orange-300'>
        <div className='flex justify-between p-4 items-center'>
            <span className='pl-4'>Logo</span>

            <div>
                <ul className='flex'>
                    <li className='px-4'>Home</li>
                    <li className='px-4'>About</li>
                    <li className='px-4'>Products</li>
                    <li className='px-4'>Schedule</li>
                    <li className='px-4'>Contact</li>
                </ul>
            </div>

            <div className='flex pr-4'>
                <button className='px-3 py-2 mx-2 rounded-lg w-20 text-white bg-black'>Signin</button>
                <button className='px-3 py-2 mx-2 rounded-lg w-20 bg-gray-100'>Signup</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar