import Sidebar from '@/components/Sidebar/Main/Sidebar'
import { SMIcons } from '../Data/SocialMediaIcons';
import DropDownBtn from '@/components/Global/Dropdown/Main/DropDownBtn';
import { SaveIcon, UploadIcon } from '@/assets/svg';
import MButton from '@/components/Global/Button/MainBtn/MButton';

const MainHome = () => {


  return (

    <div className='  overflow-y-scroll scroll-smooth flex-col w-full max-h-screen overflow-hidden'>

      <div className="grid grid-cols-1 md:grid-cols-2 p-6 pr-12">
        <div className=' max-w-[492px] '>
          {/* HEADER SECTION */}
          <div>
            <h2 className='mb-4 text-[20px] font-[700] UrbanistFont leading-[28px]'>Header</h2>

            <div>
              <span className='oronium-regular-font  text-[#29384bb9]'>Store logo</span>
              <div className='h-[118px] w-full rounded-[8px] border-2 flex justify-center items-center  border-dashed mt-2 cursor-pointer hover:bg-[#3939392d]'>
                <span>
                  {<UploadIcon />}

                </span>
              </div>
            </div>
          </div>


          {/* FOOTER SECTION */}
          <div>
            <h2 className='my-4 text-[20px] font-[700] UrbanistFont leading-[28px] '>Footer</h2>

            <div>
              <span className='oronium-regular-font   text-[#29384bb9]'>Footer text</span>
              <div className='mt-2'>
                <input type="text" className='w-full h-[54px] UrbanistFont p-[16px] border-[1px] outline-none rounded-[8px]' placeholder='Live your fashion' />
              </div>
            </div>
          </div>

          {/* SOCIAL MEDIA SECTION */}

          <div className='mt-4'>
            <span className='oronium-regular-font  text-[#29384bb9]'>Social Media</span>
            <div >
              {/* The icons are mapped from SMIcons */}
              {
                SMIcons.map((com) => {
                  return (
                    <div key={com.id} className='flex w-full  items-center gap-3 mt-2'>
                      <DropDownBtn com={com} />
                      <input type="text" className='w-full UrbanistFont  h-[44px] py-[11px] px-[16px] border-[1px] outline-none rounded-[8px]' placeholder='martin.store' />
                    </div>
                  )
                })
              }

            </div>
            <span className='text-[14px] font-[500] my-1 text-[#29384b94]'>Resolution (32x32px)</span>
          </div>


          {/* STORE NAME SECTION */}
          <div className='mt-4'>
            <div>
              <span className='oronium-regular-font   text-[#29384bb9]'>Store name</span>
              <div className='mt-2'>
                <input type="text" className='w-full h-[54px] UrbanistFont p-[16px] border-[1px] outline-none rounded-[8px]' placeholder='Here & Now' />
              </div>
            </div>
          </div>

          <div className='w-[92px] mt-8'>
            <MButton icon={<SaveIcon/>
            } text={'Save'} />
          </div>
        </div>


        {/* MOCKUP SECTION */}
        <div className='w-[595px]  max-h-[746px] p-4  rounded-[24px] shadow-lg border border-[#edebeb] hidden xl:flex flex-col gap-5 justify-center items-center'>
        </div>
      </div>


    </div>

  )
}

export default MainHome