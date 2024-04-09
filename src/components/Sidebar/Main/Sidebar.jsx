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
            <div className='flex w-[264px] border-r border-[#e7e5e5] p-4 pt-8'>
                <div>
                    {
                        SCData.map((com) => {
                            return (
                                <div key={com.id} onClick={() => handleItemClick(com.id)} className={selectedItem === com.id ? 'selected cursor-pointer bg-[#FCF3F4] w-[216px] h-[60px]  rounded-[6px] py-[12px] pl-[12px] pr-[16px]' : 'w-[216px] h-[60px]  rounded-[6px] py-[12px] pl-[12px] pr-[16px] cursor-pointer'}>
                                    <div className='flex gap-3 items-center'>
                                        <span className={selectedItem === com.id ? 'bg-[#e3a9ae] rounded-lg p-2' : ''}>
                                        {com.icon}
                                        </span>
                                        <span>{com.item}</span>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </div >
    )
}

export default Sidebar