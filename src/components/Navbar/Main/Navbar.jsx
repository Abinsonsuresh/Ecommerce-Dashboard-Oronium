import Avatar from "@/components/Global/Avatar/Avatar";
import MButton from "@/components/Global/Button/MainBtn/MButton";
import IconButton from "@/components/Global/Button/iconBtn/IconButton";
import Image from "next/image";

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
                        <MButton icon={''} text={''}/>
                        <IconButton icon={''}/>
                        <Avatar icon={''}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
