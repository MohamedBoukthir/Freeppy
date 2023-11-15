import Image from "next/image"

import {LuUser2} from 'react-icons/lu'

interface AvatarProps {
    src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({src}) => {

    if(src) {
        return <Image
            src={src}
            alt="avatar"
            height={30}
            width={30}
            className="rounded-full"
        />
    }

  return (
    <LuUser2 size={24}/>
  )
}

export default Avatar