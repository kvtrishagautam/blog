import Image from "next/image"
import Link from "next/link"
import profileImg from "@/public/profile-img.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
    <div className=" w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-gray mr-2 md:mr-4">
        <Image src={profileImg} alt="trisha" className="w-full h-auto rounded-full" sizes="33vw" priority/>
    </div>
    <span className=" text-lg md:text-xl font-bold dark:font-semibold">TRISHA</span>
    </Link>
  )
}

export default Logo