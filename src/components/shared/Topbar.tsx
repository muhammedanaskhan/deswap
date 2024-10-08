import React from 'react'
import search from '@/assets/icons/search-dapp-input.svg'
import telegram from '@/assets/icons/telegram.svg'
import up from '@/assets/icons/arrow-up-thin.svg'
import x from '@/assets/icons/x.svg'

import Image from 'next/image'

const Topbar = () => {

    const adddress = "0x2D439D796ac334Bfca70d4651E27A14f21bd9b51"
    return (
        <div className="hidden ds:flex pl-[34px] pr-[22px] ds:px-[97px] w-full justify-center items-center">
            <div className='flex justify-between py-[26px] ds:py-[29px] max-w-[1245px] left-0 right-0 w-full'>
                <div className="logo flex items-center">
                    <Image src={up} alt="search" width={24} height={24} />
                    <h1 className='font-bold text-[20.02px]'><span className="text-primary">{``}</span>DESWAP<span className="text-primary">{``}</span></h1>
                    <Image src={up} alt="search" width={24} height={24} className=' rotate-180' />
                </div>
                <div className="hidden ds:flex input-div relative items-center max-w-[365px] w-full">
                    <Image src={search} alt="search" width={24} height={24} className='absolute top-0 bottom-0 my-auto left-[14px]' />
                    <input type="text" placeholder='Search Tokens...' className="bg-[#1B1E20] text-[12px] placeholder:text-[rgba(255, 255, 255, 1)] rounded-lg w-full py-[7px] pl-12 pr-[14px] outline-none" />
                </div>
                <div className="buttons hidden ds:flex gap-[34px] items-center">
                    {/* <div className="group flex gap-3 items-center cursor-pointer">
                        <Image src={copy} alt="search" width={24} height={24} className=' group-hover:scale-110 transition ease-in-out duration-150' />
                        <h1 className="font-bold text-[14px] ">{truncateText(adddress, 12)}</h1>
                    </div> */}
                    <h1 className="font-bold text-[14px]">SWAP</h1>
                    <h1 className="font-bold text-[14px]">TOKENS</h1>
                    <h1 className="font-bold text-[14px]">POOLS</h1>
                    <Image src={telegram} alt="search" width={24} height={24} />
                    <Image src={x} alt="x" width={24} height={24} />
                    <button className="text-[#D4F478] px-4 py-[10px] rounded-[8px] border-[0.75px] border-[#D4F478] font-semibold text-[14px]">WHITEPAPER</button>
                </div>
            </div>
        </div>

    )
}

export default Topbar