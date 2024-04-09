import Avatar from "@/components/Global/Avatar/Avatar";
import MButton from "@/components/Global/Button/MainBtn/MButton";
import IconButton from "@/components/Global/Button/iconBtn/IconButton";
import Image from "next/image";
import ProfileImg from '../../../assets/profile.jpg'


const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between items-center w-full p-4">
                <div className="logo">
                    <div className="flex items-center gap-3">
                        <Image className="rounded-lg " height={54} width={54} src={"/logo.svg"} alt="" />
                        <span className="text-[18px] leading-[26px]">Oronium E-Commerce Store</span>
                    </div>
                </div>
                <div className="components flex items-center gap-4">
                    <MButton icon={<svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 7.00001C11.0004 7.16977 10.9569 7.33676 10.8736 7.48472C10.7904 7.63268 10.6703 7.75659 10.525 7.84438L1.52 13.3531C1.36818 13.4461 1.19429 13.4969 1.0163 13.5001C0.838305 13.5034 0.662659 13.4592 0.5075 13.3719C0.353819 13.286 0.225798 13.1606 0.136602 13.0088C0.0474072 12.857 0.000256786 12.6842 0 12.5081V1.49188C0.000256786 1.31581 0.0474072 1.14298 0.136602 0.991176C0.225798 0.839369 0.353819 0.714058 0.5075 0.628132C0.662659 0.54085 0.838305 0.49657 1.0163 0.499866C1.19429 0.503162 1.36818 0.553915 1.52 0.646882L10.525 6.15563C10.6703 6.24343 10.7904 6.36733 10.8736 6.51529C10.9569 6.66326 11.0004 6.83024 11 7.00001Z" fill="white" />
                    </svg>
                    } text={'Preview store'} />
                    <IconButton icon={<svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 7.00001C11.0004 7.16977 10.9569 7.33676 10.8736 7.48472C10.7904 7.63268 10.6703 7.75659 10.525 7.84438L1.52 13.3531C1.36818 13.4461 1.19429 13.4969 1.0163 13.5001C0.838305 13.5034 0.662659 13.4592 0.5075 13.3719C0.353819 13.286 0.225798 13.1606 0.136602 13.0088C0.0474072 12.857 0.000256786 12.6842 0 12.5081V1.49188C0.000256786 1.31581 0.0474072 1.14298 0.136602 0.991176C0.225798 0.839369 0.353819 0.714058 0.5075 0.628132C0.662659 0.54085 0.838305 0.49657 1.0163 0.499866C1.19429 0.503162 1.36818 0.553915 1.52 0.646882L10.525 6.15563C10.6703 6.24343 10.7904 6.36733 10.8736 6.51529C10.9569 6.66326 11.0004 6.83024 11 7.00001Z" fill="white" />
                    </svg>} />
                    <Avatar icon={ProfileImg} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
