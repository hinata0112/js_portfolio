import { FC } from "react";
import Nav from "./nav";
import Logo from "./logo";

const Header: FC = () => {
    return (
        <header className="flex justify-center items-center">
            <div className="
            container flex flex-row justify-between items-center max-w-5xl">
                <Logo />
                <Nav />
            </div>
        </header>

    );
}

export default Header;