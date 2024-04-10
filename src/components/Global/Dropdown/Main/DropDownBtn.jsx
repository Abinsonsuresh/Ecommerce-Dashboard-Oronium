'use client'

import { SMIcons } from '@/Pages/Home/Data/SocialMediaIcons';
import { useEffect, useState } from 'react';


const DropDownBtn = ({ com }) => {

    const [selectedIcon, setSelectedIcon] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setSelectedIcon(com.icon);
    }, [])


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const SetIconFn = (icon) => {
        setSelectedIcon(icon);
        setIsOpen(false);
    };
    return (
        <div>
            <div className='relative'>
                <div onClick={toggleDropdown} className="flex items-center cursor-pointer  justify-between max-w-[76px] h-[44px] py-[12px] pl-[12px] pr-[16px] rounded-[8px]  border text-gray-700">
                    <button id="dropdownSmallButton" className="inline-flex items-center text-center  focus:outline-none " type="button">{selectedIcon}
                    </button>
                    <svg className="w-2 h-2 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </div>


                {
                    isOpen && (
                        <div id="dropdownSmall" className="z-50 absolute my-2 h-full rounded-lg shadow w-[70px]">
                            <ul className="py-2 text-sm bg-[#ffffff] border max-w-[76px] shadow-sm flex flex-col items-center rounded-[8px]">
                                {
                                    SMIcons.map((comIcon) => (
                                        <li onClick={() => SetIconFn(comIcon.icon)} className='block px-4 py-4 border-b' key={comIcon.id}>
                                            {comIcon.icon}
                                        </li>
                                    ))
                                }


                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default DropDownBtn