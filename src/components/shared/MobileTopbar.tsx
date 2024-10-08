'use client'

import React, { useCallback, useEffect, useState } from 'react'
import search from '@/assets/icons/search-dapp-input.svg'
import telegram from '@/assets/icons/telegram.svg'
import x from '@/assets/icons/x.svg'

import Image from 'next/image'

const MobileTopbar = () => {

    const adddress = "0x2D439D796ac334Bfca70d4651E27A14f21bd9b51"

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
        setIsMenuOpen(prev => !prev);
    }, []);


    const handleItemClick = useCallback(
        (event: React.MouseEvent<HTMLElement>) => {
            setIsMenuOpen(prev => !prev);
            // Trigger click on nav-icon2
            const navIcon = document.getElementById('nav-icon2');
            if (navIcon) {
                navIcon.click();
            }
            // Call toggleMenu with the event
            toggleMenu(event);
        },
        [toggleMenu]
    );

    return (
        <div className="flex ds:hidden px-[23px] w-full">
            {!isSearchOpen ? (
                <div className='flex justify-between py-[14px] ds:py-[29px] max-w-[1245px] w-full'>
                    <div className="logo flex items-center">
                        <h1 className='font-bold text-[20.02px]'><span className="text-primary">{`{ `}</span>DESWAP<span className="text-primary">{` }`}</span></h1>
                    </div>

                    <div className="flex gap-[12px]">
                        <div className="w-[38.36px] h-[37.5px] flex justify-center items-center bg-[#2A2E32] rounded-[10px]" onClick={() => setIsSearchOpen(!isSearchOpen)} >
                            <Image src={search} alt="search" width={24} height={24} />
                        </div>
                        <div className="w-[38.36px] h-[37.5px] flex justify-center items-center bg-[#2A2E32] rounded-[10px]">
                            <div id="nav-icon2" className={isMenuOpen ? 'open' : ''} onClick={toggleMenu}>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex justify-between py-[14px] ds:py-[29px] max-w-[1245px] w-full gap-[14px] h-[65.5px]">
                    <div className="flex input-div relative items-center max-w-[365px] flex-grow">
                        <Image src={search} alt="search" width={24} height={24} className='absolute top-0 bottom-0 my-auto left-[14px]' />
                        <input type="text" placeholder='Search dApp' className="bg-[#1B1E20] text-[12px] placeholder:text-[rgba(255, 255, 255, 1)] rounded-lg w-full py-[7px] pl-12 pr-[14px] outline-none" />
                    </div>
                    <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="font-bold text-[14px] cursor-pointer">Cancel</button>
                </div>
            )}

            <div
                className={`fixed pb-8 inset-0 bg-[#0D0D0D] z-[2147483600] transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible top-[64px]' : ' top-[64px] opacity-0 invisible'
                    }`}
            >
                <div className="h-full overflow-y-auto flex flex-col justify-between">

                    <ul className=" pt-6 flex flex-col gap-4 w-[240px]">

                    </ul>

                    <div className="bottom-section flex flex-col gap-8 px-[16px]">

                    </div>
                </div>
            </div>
        </div>

    )
}

export default MobileTopbar