import Avatar from "@/components/Global/Avatar/Avatar";
import MButton from "@/components/Global/Button/MainBtn/MButton";
import IconButton from "@/components/Global/Button/iconBtn/IconButton";
import Image from "next/image";
import ProfileImg from '../../../assets/profile.jpg'
import { BellIcon, Play } from "@/assets/svg";

const Navbar = () => {
    return (
        <div className="max-w-screen oronium-Navbar">
            <div className="flex justify-between items-center  max-h-[54px]">
                {/* Logo */}
                <div className="logo">
                    <div className="flex items-center gap-2">
                        <Image className="rounded-lg " priority height={54} width={54} src={"/logo.svg"} alt="" />
                        <span className=" UrbanistFont oronium-regular-font-2  hidden md:block">Oronium E-Commerce Store</span>
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
