import Sidebar from '@/components/Sidebar/Main/Sidebar'
import React from 'react'

const MainHome = () => {
  return (
    <div>
      <div className='flex'>
        <Sidebar />
        <div className='p-6'>

          <div>
            <h2 className='my-4 text-[20px] font-[700] leading-[28px] '>Header</h2>

            <div>
              <span className='text-[16px] font-[600] leading-[28px] text-[#29384bb9]'>Store logo</span>
              <div className='h-[118px] w-[472px] rounded-[8px] border-2 flex justify-center items-center  border-dashed mt-2'>
                <p>H</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default MainHome