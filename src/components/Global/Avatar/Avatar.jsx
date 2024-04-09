import Image from "next/image";


const Avatar = ({icon}) => {
    return (
        <div>
            <Image className="rounded-full " height={48} width={48} src={icon} alt="" />

        </div>
    )
}

export default Avatar