import React from 'react'

const Clubfeed = () => {
  return (
    <div className='pl-[72px] pr-[77px]'>
          <div className='border flex flex-row gap-[13px] rounded-xl py-[18px] pl-[12px] px-[200px] items-center border-[#D9D9D9] border-[1px]'>
                <img src='./ellipse.png' alt='img' width={44} height={44} />
                <p className='text-[#7052FF]'>Create post...</p>
          </div>
          <div className='border border-[#D9D9D9] rounded-xl mt-[11px] px-[12px] border-[1px]'>
              <div className=' items-center pt-[11px] flex justify-between '>
                      <span className='flex flex-row px-[4px] items-center'>
                        <img src='./ellipse.png' alt='img' width={44} height={44} />
                        <h1 className='text-[#1C1F25] text-[14px] font-semibold'>Ankur</h1>
                      </span>
                      <span>
                            <p className='text-[10px] text-center bg-[#14AE5C26] rounded-full text-[#14AE5C]'>Tech</p>
                            <p className='text-[#9C9C9C] text-[10px]'>23 hours ago</p>
                      </span>
                </div>
              
                 <h1 className='text-[14px] text-[#1B1F23] font-medium py-[18px]'>Who’s the worst family guy person character ever?</h1>
                 <div>
                      <img src='./clubfeed.png' alt='img' width={376} height={255} />
                      <div className='pt-[10px] pb-[8px]'>
                         
                      </div> 
                 </div>
          </div>

    </div>
  )
}

export default Clubfeed