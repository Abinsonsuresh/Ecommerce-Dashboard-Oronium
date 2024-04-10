'use client'

import { SMIcons } from '@/Pages/Home/Data/SocialMediaIcons';
import { useEffect, useState } from 'react';


const DropDownBtn = ({ com }) => {

    const [selectedIcon, setSelectedIcon] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    // To rendder the default icon when the page is loaded
    useEffect(() => {
        setSelectedIcon(com.icon);
    }, [])

// Fn to toggle the dropdon menu
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Fn to set the icon
    const SetIconFn = (icon) => {
        setSelectedIcon(icon);
        setIsOpen(false);
    };
    return (
        <div>
            <div className='relative'>
                <div onClick={toggleDropdown} className="oronium-DropDownBtn">
                    {/* Selected Icon will be rendered as default */}
                    <button  className="inline-flex items-center text-center  focus:outline-none " type="button">{selectedIcon}
                    </button>
                    {/* Dropdown icon */}
                    <svg className="w-2 h-2 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </div>

                {/* If isopen true then the dropdown will be displayed */}
                {
                    isOpen && (
                        <div id="dropdownSmall" className="z-50 absolute my-2 h-full rounded-lg shadow w-[70px]">
                            <ul className="py-2 text-sm bg-[#ffffff] border max-w-[76px] shadow-sm flex flex-col items-center rounded-[8px]">
                                {/* Icons rendered from SMIcons file */}
                                {
                                    SMIcons.map((comIcon) => (
                                        // On clicking the SetIconFn() -> default selected icon will be changed and assigned as selected icon
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