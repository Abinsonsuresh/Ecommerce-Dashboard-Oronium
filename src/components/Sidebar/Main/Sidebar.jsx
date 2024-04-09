import React from 'react'
import { SCData } from '../Data/SidebarComponentsData'

const Sidebar = () => {
    return (
        <div>
            <div className='flex w-[264px] border-r border-[#e7e5e5] p-4 pt-8'>
                <div>
                    {
                        SCData.map((com) => {
                            return (
                                <div key={com.id} className='w-[216px] h-[60px] flex gap-3 items-center rounded-[6px] py-[12px] pl-[12px] pr-[16px]'>
                                    {com.icon}
                                    <span>{com.item}</span>
                                </div>
                            )
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default Sidebar