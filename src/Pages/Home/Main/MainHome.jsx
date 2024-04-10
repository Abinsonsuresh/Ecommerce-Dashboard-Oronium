'use client'
import Sidebar from '@/components/Sidebar/Main/Sidebar'
import { SMIcons } from '../Data/SocialMediaIcons';
import { useEffect, useState } from 'react';
import { FaInstagram } from 'react-icons/fa';

const MainHome = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSelectedIcon(<FaInstagram />);
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
      <div className='flex'>
        <Sidebar />
        <div className='p-6'>
          {/* HEADER SECTION */}
          <div>
            <h2 className='mb-4 text-[20px] font-[700] leading-[28px]'>Header</h2>

            <div>
              <span className='text-[16px] font-[600] leading-[28px] text-[#29384bb9]'>Store logo</span>
              <div className='h-[118px] w-[472px] rounded-[8px] border-2 flex justify-center items-center  border-dashed mt-2'>
                <p>H</p>
              </div>
            </div>
          </div>


          {/* FOOTER SECTION */}
          <div>
            <h2 className='my-4 text-[20px] font-[700] leading-[28px] '>Footer</h2>

            <div>
              <span className='text-[16px] font-[600] leading-[28px] text-[#29384bb9]'>Footer text</span>
              <div className='mt-2'>
                <input type="text" className='w-[472px] h-[54px] p-[16px] border-[1px] outline-none rounded-[8px]' placeholder='Live your fashion' />
              </div>
            </div>
          </div>

          {/* SOCIAL MEDIA SECTION */}

          <div className='mt-4'>
            <span className='text-[16px] font-[600] leading-[28px] text-[#29384bb9]'>Social Media</span>
            <div className='flex items-center gap-3 mt-2'>
              <div>
                <div className='relative'>
                  <div onClick={toggleDropdown} className="flex items-center cursor-pointer  justify-between w-[76px] h-[44px] py-[12px] pl-[12px] pr-[16px] rounded-[8px]  border text-gray-700">
                    <button id="dropdownSmallButton"  className="inline-flex items-center text-center  focus:outline-none " type="button">{selectedIcon}
                    </button>
                    <svg className="w-2 h-2 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                  </div>


                  {
                    isOpen && (
                      <div id="dropdownSmall" className="z-10 absolute my-2   divide-gray-100 rounded-lg shadow w-[70px]">
                        <ul className="py-2 text-sm text-gray-700 ">
                          {
                            SMIcons.map((com) => (
                              <li onClick={() => SetIconFn(com.icon)} className='block px-4 py-2' key={com.id}>
                                {com.icon}
                              </li>
                            ))
                          }

                        </ul>
                      </div>
                    )
                  }
                </div>
              </div>
              <input type="text" className='w-[388px] h-[44px] py-[11px] px-[16px] border-[1px] outline-none rounded-[8px]' placeholder='martin.store' />
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default MainHome