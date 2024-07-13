import React from 'react'
import { Search } from 'lucide-react';
const SearchBar = () => {
  return (
    <div>
                <span className='flex items-center bg-[#6A737D0F]  flex-row rounded-xl pl-[12px] gap-[16px]'>
            <Search style={{ }}  /><input type='search' placeholder='search members' className='bg-[#6A737D0F] py-[9px] opacity-6 text-[12px] pr-[137px] focus:outline-none' />
        </span>

    </div>
  )
}

export default SearchBar