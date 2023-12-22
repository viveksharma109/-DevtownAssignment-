import logo2 from "../assets/images/logo2.png"
import { Link, NavLink, useLocation } from "react-router-dom"
import styles from "./Header.module.css"
import { useEffect, useState } from "react";
import { IoIosHome } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import { Box } from "@mui/material";

export const Header = () => {
    const location = useLocation();
    const [isActive, setActive] = useState("Home");

    useEffect(() => {
        if (location.pathname === "/") {
            // home active
            setActive("Home");
        }
        else {
            // cart active
            setActive("Cart");
        }
    }, [location])
    return (<>
        <nav id="header" className="bg-black text-white">
            <div className="w-full container mx-3 flex flex-wrap items-center justify-between mt-0 py-2">
                <div className="logo-wrapper pl-4 flex items-center">
                    <Link className="togglecolor text-white hover:no-underline font-bold text-2xl lg:text-4xl">
                        <img src={logo2} alt="logo" className="w-40 h-40 0bject-cover" />
                    </Link>
                </div>
                {/* <div className="nav-menu-wrapper flex items-center justify-between  space-x-10">
                </div> */}
                <div className="flex items-center justify-center space-x-4" style={{ marginRight: "30px" }}>
                    <NavLink className={isActive === "Home" ? styles.navlink : styles.navlink2} to='/'>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <IoIosHome /> Home
                        </Box>
                    </NavLink>
                    <NavLink className={isActive === "Cart" ? styles.navlink : styles.navlink2} to='/cart'>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <FaCartArrowDown style={{marginRight: "4px"}} /> Cart
                        </Box>
                    </NavLink>
                </div>
            </div>
        </nav>
    </>
    )
}