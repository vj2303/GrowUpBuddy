import React from 'react'

const ClubCard = () => {
  return (
    <>
      <div className='border rounded-xl border-[#D9D9D9] border-[1px]'>
             <div className='flex flex-row justify-between px-[12px] pt-[12px] pb-[8px]'>
                <img src='./Code_Square.png' alt='code_square' width={40} height={20} />
                <span>
                    <h1 className='text-[#0C001C] text-[12px] font-semibold'>Tech Minds</h1>
                    <p className='text-[10px] text-[#979797]'>9899 members</p>
                </span>
                <button className='text-[#7052FF]'>Join</button>
             </div>
             <p className='px-[12px] pb-[12px] text-[10px] text-[#1C1F25]'>A group for tech enthusiasts, follow a passion with people follow a passion with people a <span className='text-[#7052FF]'>Read More...</span></p>
        </div>
    </>
  )
}

export default ClubCard