'use client'
import React, { useState } from 'react'
import { SCData } from '../Data/SidebarComponentsData'

const Sidebar = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    // Function to set the selected element in the sidebar the id of the element is passed in the fn to validate
    const handleItemClick = (id) => {
        setSelectedItem(id);
    };

    return (
        <div>
            <div className='flex flex-col oronium-Sidebar'>
                <div className='flex items-center w-full flex-col'>
                    {/* External js file (SCData) containing the sidebar elements data is mapped here */}
                    {
                        SCData.map((com) => {
                            return (
                                <div key={com.id} onClick={() => handleItemClick(com.id)} className={selectedItem === com.id ? 'oronium-Sidebar-el-selected' : 'oronium-Sidebar-el-not-selected'}>
                                    <div className='flex gap-3 items-center '>
                                        {/* Selected item icon bg change */}
                                        <span className={selectedItem === com.id ? 'bg-[#ff293b] fill-none stroke-white rounded-lg p-1' : 'fill-none stroke-red-600'}>
                                            {com.icon}
                                        </span>
                                        <span className='oronium-regular-font-3 UrbanistFont'>{com.item}</span>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                    <div className='flex flex-col justify-start mt-[84px] py-[12px] pl-[12px]'>
                        <span className='UrbanistFont'>Theme</span>
                        <div className='flex items-center mt-4 oronium-regular-rounded bg-[#eae9e9] p-[12px] justify-between'>
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