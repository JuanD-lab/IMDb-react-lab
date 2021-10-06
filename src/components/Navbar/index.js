import React from "react";
import { VscHome, VscFoldUp, VscVmRunning, VscAccount } from "react-icons/vsc";
import fetchCategory from "../../services/requests";
import { Link } from "wouter";

function Navbar() {
    return (
        <>
            <header class=" py-4 px-1">
                <div className="header__icons flex w-full">
                    <a href="/" className="icon-nav flex-auto">
                        <img width="60px" src="./IMDB_Logo.svg" alt="logo" />
                    </a>
                    <div className="icon-nav">
                        <VscAccount size="1.6rem" />
                    </div>
                </div>
                <div>
                    <nav className="py-4 md:py-6">
                        <ul className="flex flex-grow justify-evenly animation-cubic ">
                            <li className="">
                                <Link href="/">
                                    <a className="relative link">Home</a>
                                </Link>
                            </li>

                            {Object.entries(fetchCategory).map(
                                ([key, { title, url }]) => (
                                    <li key={key}>
                                        <Link href={title}>
                                            <p className="relative link cursor-pointer">
                                                {title}
                                            </p>
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Navbar;
