import React, { useState } from 'react'

import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"
import { RiSearch2Line } from "react-icons/ri"

import Signin from '../Auth/Signin';
import Signup from '../Auth/Signup';
const MobileNavbar = ({ user, IsDropdownOpen, setIsDropdownOpen, Signin, Signup }) => {
    const signIn = () => {
        Signin()
        setIsDropdownOpen(false)
    }
    const signUp = () => {
        Signup()
        setIsDropdownOpen(false)
    }

    return <>
        <div className='flex w-full  items-center justify-between lg:hidden ' >
            <div className='w-28'>
                <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='logo' className='w-full h-full' />
            </div>
            <div className='flex items-center gap-3 relative'>
                <button className='bg-zomato-400 text-white py-2 px-3 rounded-full'>
                    Use App
                </button>
                {user?.fullname ? (
                    <>     <div onClick={() => setIsDropdownOpen((prev) => !prev)} className='border border-gray-300 text-zomato-400 w-12 h-12 rounded-full' >
                        <img src="https://www.kindpng.com/picc/m/136-1369892_avatar-people-person-business-user-man-character-avatar.png" alt="avatar" className='w-full h-full rounded-full object-cover' />
                    </div>
                        {IsDropdownOpen && (
                            <div className='absolute shadow-lg w-36 py-3 -bottom-10 bg-white border border-gray-200 -right-4  z-20 flex flex-col gap-2' >
                                <button>sign out</button>
                            </div>
                        )}</>
                ) : (
                    <>
                        <span onClick={() => setIsDropdownOpen((prev) => !prev)} className="border p-2 border-gray-400 rounded-full">
                            <FaUserAlt className='w-full h-full' />
                        </span>


                        {IsDropdownOpen && (
                            <div className='absolute shadow-lg py-3 -bottom-24 bg-white border border-gray-200 -right-0 w-36 z-20 flex flex-col gap-2' >
                                <button onClick={signIn} >sign In</button>
                                <button onClick={signUp}>sign Up</button>
                            </div>
                        )}
                    </>
                )}

            </div>
        </div>
    </>
}


const LargNavbar = ({ user, IsDropdownOpen, setIsDropdownOpen, Signin, Signup }) => {

    const signIn = () => {
        Signin()
        setIsDropdownOpen(false)
    }
    const signUp = () => {
        Signup()
        setIsDropdownOpen(false)
    }



    return <>
        <div className='w-full  items-center justify-between hidden lg:flex px-14 ' >
            <div className='gap-4  items-center justify-around flex '>
                <div className='w-28'>
                    <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png' alt='logo' className='w-full h-full' />
                </div>
            </div>
            <div className='w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded'>
                <div className='flex items-center gap-2 border-r-2 border-gray-300 pr-2'>
                    <span className='text-zomato-400'>
                        <HiLocationMarker />
                    </span>
                    <input type="text" placeholder='Chennai ECR' className=' w-full focus:outline-none' />
                    <IoMdArrowDropdown />
                </div>
                <div className=' flex w-full items-center gap-2'>
                    <RiSearch2Line />
                    <input type="search" placeholder='Search for restaurant , cuisine or a dish ' className='w-full focus:outline-none' />
                </div>
            </div>
            <div className='flex items-center gap-3 relative'>
                {user?.fullname ? (
                    <>     <div onClick={() => setIsDropdownOpen((prev) => !prev)} className='border border-gray-300 text-zomato-400 w-12 h-12 rounded-full' >
                        <img src="https://www.kindpng.com/picc/m/136-1369892_avatar-people-person-business-user-man-character-avatar.png" alt="avatar" className='w-full h-full rounded-full object-cover' />
                    </div>
                        {IsDropdownOpen && (
                            <div className='absolute shadow-lg py-3 -bottom-10 bg-white border border-gray-200 -right-0 w-36 z-20 flex flex-col gap-2' >
                                <button>sign out</button>
                            </div>
                        )}</>
                ) : (
                    <>
                        <span onClick={() => setIsDropdownOpen((prev) => !prev)} className="border p-2 border-gray-400 rounded-full">
                            <FaUserAlt className='w-full h-full' />
                        </span>


                        {IsDropdownOpen && (
                            <div className='absolute shadow-lg py-3 -bottom-24 bg-white border border-gray-200 -right-0 w-36 z-20 flex flex-col gap-2' >
                                <button onClick={signIn} >sign In</button>
                                <button onClick={signUp}>sign Up</button>
                            </div>
                        )}
                    </>
                )}

            </div>
        </div>
    </>
}

const Navbar = () => {
    const [openSignIn, setIsOpenSignIn] = useState(false)
    const [openSignUp, setIsOpenSignUp] = useState(false)
    const openSigInModal = () => setIsOpenSignIn(true)
    const openSingUpModal = () => setIsOpenSignUp(true)



    const [IsDropdownOpen, setIsDropdownOpen] = useState(false);
    const user = {
        // fullname: "vk"
    }
    return <>

        <Signin isOpen={openSignIn} setIsOpen={setIsOpenSignIn} />
        <Signup isOpen={openSignUp} setIsOpen={setIsOpenSignUp} />

        <nav className='p-4 lg:py-2 flex bg-white shadow-md lg:shadow-none  lg:border-b-2 border-gray-100 w-full items-center'>
            <MobileNavbar user={user} setIsDropdownOpen={setIsDropdownOpen} IsDropdownOpen={IsDropdownOpen}
                Signin={openSigInModal}
                Signup={openSingUpModal} />
            <LargNavbar user={user} setIsDropdownOpen={setIsDropdownOpen} IsDropdownOpen={IsDropdownOpen} Signin={openSigInModal}
                Signup={openSingUpModal} />
        </nav>
    </>
}

export default Navbar