import React from 'react'
import { Link } from 'react-router-dom'


const CustBtn = (val) => {
  return (
    <div className='bg-[#1F357F] h-[2rem] w-10rem px-5 py-2 flex items-center justify-center text-white rounded-lg font-normal'>
    <Link>{val.val}</Link>
    </div>
  )
}

export default CustBtn