import React from 'react'
import { Mail } from 'lucide-react';

const MembersCard = () => {
  return (
    <div className='flex flex-row gap-[8px]'>
    <img src='./member.png' alt='member' width={60} height={60} className='w-[60px] h-[60px]' />
    <div className=''>
        <h3 className='font-semibold text-[14px] leading-[21px]'>Aryan Trivedi. <span className='text-[#979797] '>1st</span></h3>
        <h1 className='text-[#1C1F25] text-[14px] leading-[21px]'>Founder - Finzie | Ex Groww | BITS Pilani</h1>
        <p className='text-[#979797] text-[12px]'>Bengaluru</p>
        <p className='text-[#979797] text-[12px]'>Summary: Hi, I am Aryan - Founder at......</p>
        <span className='flex gap-4 mt-[8px]'>
            <button className='border border-[#9C9C9C] border-[1px] rounded-full gap-2 flex items-center text-[10px] text-[#9C9C9C] px-[8px] py-[2px]'><img src='./add_user.png' className=''  />Connect</button>
            <button className='border border-[#9C9C9C] border-[1px] rounded-full text-[#9C9C9C]'><Mail style={{padding:'1px', width:'30px', height:'13px'}} /></button>
        </span>
    </div>
</div>
  )
}

export default MembersCard