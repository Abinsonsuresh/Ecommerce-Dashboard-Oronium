import Sidebar from '@/components/Sidebar/Main/Sidebar'
import { SMIcons } from '../Data/SocialMediaIcons';
import DropDownBtn from '@/components/Global/Dropdown/Main/DropDownBtn';

const MainHome = () => {


  return (
    <div>
      <div className='flex'>
        <div className='hidden md:block'>
        <Sidebar />
        </div>
        <div className='p-6 max-w-[492px] '>
          {/* HEADER SECTION */}
          <div>
            <h2 className='mb-4 text-[20px] font-[700] UrbanistFont leading-[28px]'>Header</h2>

            <div>
              <span className='text-[16px] font-[600] leading-[28px] UrbanistFont text-[#29384bb9]'>Store logo</span>
              <div className='h-[118px] w-full rounded-[8px] border-2 flex justify-center items-center  border-dashed mt-2'>
                <p>H</p>
              </div>
            </div>
          </div>


          {/* FOOTER SECTION */}
          <div>
            <h2 className='my-4 text-[20px] font-[700] UrbanistFont leading-[28px] '>Footer</h2>

            <div>
              <span className='text-[16px] font-[600] UrbanistFont leading-[28px] text-[#29384bb9]'>Footer text</span>
              <div className='mt-2'>
                <input type="text" className='w-full h-[54px] UrbanistFont p-[16px] border-[1px] outline-none rounded-[8px]' placeholder='Live your fashion' />
              </div>
            </div>
          </div>

          {/* SOCIAL MEDIA SECTION */}

          <div className='mt-4'>
            <span className='text-[16px] font-[600] leading-[28px] UrbanistFont text-[#29384bb9]'>Social Media</span>
            <div >
              {
                SMIcons.map((com) => {
                  return (
                    <div key={com.id} className='flex items-center gap-3 mt-2'>
                      <DropDownBtn com={com} />
                      <input type="text" className='max-w-[388px] UrbanistFont md:w-[388px] h-[44px] py-[11px] px-[16px] border-[1px] outline-none rounded-[8px]' placeholder='martin.store' />
                    </div>
                  )
                })
              }

            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default MainHome