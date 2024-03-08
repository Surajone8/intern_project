import React from 'react'
import style from "../CSS/LandingPage.module.css"
import logo from "@/app/components/logo.png"
import Image from 'next/image'

const Navbar = () => {
    return (
        <>
            <div className={style.navbar}>
                <div className={style.nav_logo}>
                    {/* <Image src={logo} alt="logo" width={200} height={50} className={style.logo} /> */}
                </div>
                <input type="text" plaseholder="Search here..." className={style.nav_search} />
            </div>
        </>
    )
}

export default Navbar