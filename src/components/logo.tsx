import Link from "next/link";
import { FC } from "react";

const Logo: FC = () => {
    return (
        <Link href={"/"} className=" text-black font-bold text-2xl py-4 px-4 ">My Portfolio</Link >
    );
}

export default Logo;