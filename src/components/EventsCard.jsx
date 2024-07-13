

const EventsCard = () => {
  return (
    <div className="">
         <h1 className='font-semibold'>Upcoming events</h1>
        <div className='px-[10px] mt-[20px]'>
            <span className='flex text-[8px] leading-[12px] justify-between font-medium'>
                <p className='bg-[#FFE3A3] rounded-md px-[4px] py-[2px] '>Web, May 08 @ 6:00 PM</p>
                <p className='flex gap-[8px] px-[8px] py-[2px] rounded-md bg-[#7052FF] bg-opacity-20 items-center'><img src='./fluent_people-community.png' alt='img' width={14} height={14}/><span>456 Buddy</span></p>
            </span>
            <div className='mt-[14px]'>
                <h3 className='text-[12px] font-semibold  text-[#1C1F25]'>Building the Fastest Growing Gaming Tech for future</h3>
                <div className='flex flex-row gap-[8px]'>
                    <img src='./logo_grow_up_buddy.png' alt='logo' width={36} height={26} />
                    <span>
                        <h3 className='text-[12px] leading-[18px] font-medium'>Growbuddy Events</h3>
                        <p className='text-[10px] text-[#979797]'>Learn to build a product from scratch, market it and much more</p>
                    </span>
                </div>
                <div className='flex flex-row gap-[8px] mt-[8px]'>
                    <img src='./fluent_chat.png' alt='img' />
                    <button className='bg-[#7052FF] text-[10px] px-[71px] py-[8px] text-[white] rounded-full'>Register Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventsCard