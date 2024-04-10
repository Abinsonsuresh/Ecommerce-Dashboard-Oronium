import Avatar from "@/components/Global/Avatar/Avatar";
import MButton from "@/components/Global/Button/MainBtn/MButton";
import IconButton from "@/components/Global/Button/iconBtn/IconButton";
import Image from "next/image";
import ProfileImg from '../../../assets/profile.jpg'


const Navbar = () => {
    return (
        <div className="max-w-[1441px] max-h-[106px] border-b border-[#e7e5e5] py-[26px] px-[24px]">
            <div className="flex justify-between items-center max-w-[1370px] max-h-[54px]">
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
                    <IconButton icon={<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.5215 5.4427C10.7158 3.69355 12.199 2.33331 14 2.33331C15.8009 2.33331 17.2842 3.69355 17.4784 5.44271C20.2479 6.74844 22.1666 9.56554 22.1666 12.8333V16.5182C22.1666 16.8374 22.2935 17.1435 22.5192 17.3693L24.1583 19.0084C24.4919 19.342 24.5917 19.8438 24.4112 20.2798C24.2306 20.7157 23.8052 21 23.3333 21L18.6666 21C18.6666 23.5773 16.5773 25.6666 14 25.6666C11.4226 25.6666 9.33331 23.5773 9.33331 21L4.66664 21C4.19477 21 3.76936 20.7157 3.58878 20.2798C3.4082 19.8438 3.50802 19.342 3.84168 19.0084L5.48077 17.3693C5.70649 17.1435 5.83331 16.8374 5.83331 16.5182V12.8333C5.83331 9.56554 7.75202 6.74843 10.5215 5.4427ZM11.6666 21C11.6666 22.2886 12.7113 23.3333 14 23.3333C15.2886 23.3333 16.3333 22.2886 16.3333 21H11.6666ZM14 4.66665C13.3556 4.66665 12.8333 5.18898 12.8333 5.83331V6.23163C12.8333 6.72608 12.5216 7.16684 12.0554 7.33161C9.7882 8.13296 8.16664 10.2953 8.16664 12.8333V16.5182C8.16664 17.299 7.90845 18.0532 7.43935 18.6667H20.5606C20.0915 18.0532 19.8333 17.299 19.8333 16.5182V12.8333C19.8333 10.2953 18.2117 8.13296 15.9445 7.33161C15.4783 7.16684 15.1666 6.72608 15.1666 6.23163V5.83331C15.1666 5.18898 14.6443 4.66665 14 4.66665Z" fill="#29384B" fillOpacity="0.8" />
                    </svg>
                    } />
                    <Avatar icon={ProfileImg} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
