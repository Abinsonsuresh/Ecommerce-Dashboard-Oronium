'use client'
import React, { useState } from 'react'
import { SCData } from '../Data/SidebarComponentsData'

const Sidebar = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (id) => {
        setSelectedItem(id);
    };
    return (
        <div>
            <div className='flex flex-col  w-[264px] border-r border-[#e7e5e5] p-4 pt-8'>
                <div className='flex items-center w-full flex-col'>
                    {
                        SCData.map((com) => {
                            return (
                                <div key={com.id} onClick={() => handleItemClick(com.id)} className={selectedItem === com.id ? 'selected gap-[8px]  cursor-pointer w-full bg-[#FCF3F4]  h-[60px]  rounded-[6px] py-[12px] pl-[12px]' : 'w-[216px] h-[60px]  rounded-[6px] gap-[8px]  py-[12px] pl-[12px] pr-[16px] cursor-pointer'}>
                                    <div className='flex gap-3 items-center '>
                                        <span className={selectedItem === com.id ? 'bg-[#e3a9ae] rounded-lg p-2' : ''}>
                                            {com.icon}
                                        </span>
                                        <span className='text-[16px] UrbanistFont leading-[24px]'>{com.item}</span>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                    <div className='flex flex-col justify-start mt-[84px] py-[12px] pl-[12px]'>
                        <span className='UrbanistFont'>Theme</span>
                        <div className='flex items-center mt-4 rounded-[8px] bg-[#eae9e9] p-[12px] justify-between'>
                            <span className='text-[14px] UrbanistFont'>Primary color</span>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="8" fill="#C63E4A" />
                            </svg>

                        </div>
                    </div>

            </div>
        </div >
    )
}

export default Sidebar