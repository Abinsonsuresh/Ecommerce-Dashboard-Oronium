
const MButton = ({text,icon}) => {
  return (
    <div>
        <button className='flex items-center gap-2 w-full px-3 py-2 rounded-lg bg-[#C63E4A] '>
            {icon}
            <span className='text-[14px] font-[600] leading-[21px] text-white'>{text}</span>
        </button>
    </div>
  )
}

export default MButton