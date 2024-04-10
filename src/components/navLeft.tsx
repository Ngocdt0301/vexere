import React from 'react'

type Props = {}

const NavLeft = (props: Props) => {
  return (
    <>
        <div className='w-[20%] mt-[60px]'>
            <ul className='flex flex-col justify-center items-center text-[24px] font-semibold gap-2'>
                <li className='h-[65px] text-center leading-[65px] bg-[#DADADA] w-full rounded-lg'>Dashboard</li>
                <li className='h-[65px] text-center leading-[65px] bg-[#DADADA] w-full rounded-lg'>Lịch sử chuyến</li>
                <li className='h-[65px] text-center leading-[65px] bg-[#DADADA] w-full rounded-lg'>Chuyến Xe</li>
                <li className='h-[65px] text-center leading-[65px] bg-[#DADADA] w-full rounded-lg'>Nhà xe</li>
            </ul>
        </div>
    </>
    // <div>NavLeft</div>
  )
}

export default NavLeft