import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoIosSearch } from 'react-icons/io';
import { CiCircleQuestion } from 'react-icons/ci';
import { CiSettings } from 'react-icons/ci';
import { PiDotsNineBold } from 'react-icons/pi';
import Avatar from './ui/Avatar';

const Navbar = () => {
    return (
        <>
            <div className="flex items-center justify-between mx-3 h-16">
                <div className="flex items-center gap-2">
                    <div className="p-3 rounded-full cursor-pointer hover:bg-gray-100">
                        <RxHamburgerMenu size={20} />

                    </div>
                    <img className="w-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="gmail-logo" />
                    <h1 className='text-2xl text-gray-700 '>Gmail</h1>
                </div>
                <div className='md:block hidden w-[50%] mr-60'>

                    <div className="flex items-center px-2 py-3 rounded-full bg-[#EAF1FB]">
                        <IoIosSearch size={24} className='text-gray-700' />
                        <input type="text" className='rounded-full w-full bg-transparent outline-none px-1'
                            placeholder='Search Mail' />
                    </div>


                </div>
                <div className="md:block hidden">
                    <div className="flex items-center gap-2">
                        <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                            <CiCircleQuestion size={20} />

                        </div>
                        <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                            <CiSettings size={20} />

                        </div>

                        <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                            <PiDotsNineBold size={20} />

                        </div>

<div className="cursor-pointer">
    <Avatar src="https://preview.redd.it/i-became-the-heros-mom-he-is-truly-the-best-dad-and-best-ml-v0-dqi77o2zlhcc1.jpg?width=720&format=pjpg&auto=webp&s=74e1df40422745ad202dae5e25aaa8272e404688" size="40" round={true} />
    
</div>



 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
