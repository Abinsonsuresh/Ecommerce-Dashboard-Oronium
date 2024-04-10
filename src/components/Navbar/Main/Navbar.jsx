import Avatar from "@/components/Global/Avatar/Avatar";
import MButton from "@/components/Global/Button/MainBtn/MButton";
import IconButton from "@/components/Global/Button/iconBtn/IconButton";
import Image from "next/image";
import ProfileImg from '../../../assets/profile.jpg'
import { BellIcon, Play } from "@/assets/svg";

const Navbar = () => {
    return (
        <div className="max-w-screen max-h-[106px] border-b border-[#e7e5e5] py-[26px] px-[24px]">
            <div className="flex justify-between items-center max-w-[1370px] max-h-[54px]">
                {/* Logo */}
                <div className="logo">
                    <div className="flex items-center gap-2">
                        <Image className="rounded-lg " priority height={54} width={54} src={"/logo.svg"} alt="" />
                        <span className="text-[18px] UrbanistFont leading-[26px]">Oronium E-Commerce Store</span>
                    </div>
                </div>
                {/* Other Navbar components -right-area */}
                <div className="components flex items-center gap-4">
                    <MButton icon={<Play />} text={'Preview store'} />
                    <IconButton icon={<BellIcon />
                    } />
                    <Avatar icon={ProfileImg} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
