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

        <div className="grid grid-cols-1 md:grid-cols-2 p-6 pr-12">
          <div className=' max-w-[492px] '>
            {/* HEADER SECTION */}
            <div>
              <h2 className='mb-4 text-[20px] font-[700] UrbanistFont leading-[28px]'>Header</h2>

              <div>
                <span className='oronium-regular-font  text-[#29384bb9]'>Store logo</span>
                <div className='h-[118px] w-full rounded-[8px] border-2 flex justify-center items-center  border-dashed mt-2 cursor-pointer hover:bg-[#3939392d]'>
                  <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C11.4477 22 11 21.5523 11 21L11 15.4142L9.70711 16.7071C9.31658 17.0976 8.68342 17.0976 8.29289 16.7071C7.90237 16.3166 7.90237 15.6834 8.29289 15.2929L11.2929 12.2929C11.6834 11.9024 12.3166 11.9024 12.7071 12.2929L15.7071 15.2929C16.0976 15.6834 16.0976 16.3166 15.7071 16.7071C15.3166 17.0976 14.6834 17.0976 14.2929 16.7071L13 15.4142L13 21C13 21.5523 12.5523 22 12 22ZM18 19C18.5523 19 19 18.5523 19 18L19 12L17.4142 12C16.8838 12 16.3751 11.7893 16 11.4142L13.5858 9L10.4142 9L8 11.4142C7.62493 11.7893 7.11622 12 6.58579 12L5 12L5 18C5 18.5523 5.44772 19 6 19L8 19C8.55229 19 9 19.4477 9 20C9 20.5523 8.55229 21 8 21L6 21C4.34315 21 3 19.6569 3 18L3 6C3 4.34314 4.34315 3 6 3L18 3C19.6569 3 21 4.34315 21 6L21 18C21 19.6569 19.6569 21 18 21L16 21C15.4477 21 15 20.5523 15 20C15 19.4477 15.4477 19 16 19L18 19ZM19 10L19 6C19 5.44772 18.5523 5 18 5L6 5C5.44772 5 5 5.44771 5 6L5 10L6.58579 10L9 7.58579C9.37507 7.21071 9.88378 7 10.4142 7L13.5858 7C14.1162 7 14.6249 7.21071 15 7.58579L17.4142 10L19 10Z" fill="#29384B" fill-opacity="0.4" />
                    </svg>

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



          </div>


          {/* MOCKUP SECTION */} 
          <div className='w-[595px]  max-h-[746px] p-4  rounded-[24px] shadow-lg border border-[#edebeb] hidden xl:flex flex-col gap-5 justify-center items-center'>
            {/* <div className='w-full h-[240px] border  rounded-[16px]'>

            </div>

            <div className='w-full h-[240px] border  rounded-[16px]'>

            </div> */}
          </div>
        </div>


      </div>
    </div>
  )
}

export default MainHome