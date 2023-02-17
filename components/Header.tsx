import Image from 'next/image'
import React from 'react'
import {BellIcon, ChatIcon,PlusIcon,SpeakerphoneIcon} from '@heroicons/react/outline' 
import {HomeIcon, SearchIcon, ChevronDownIcon, MenuIcon} from '@heroicons/react/solid'

function Header() {
  return (
    <div className='flex bg-white px-4 py-2 shadow-sm sticky top-0 z-50'>
        <div className='relative h-10 w-20 flex-shrink-0'>
            <Image src="https://img.freepik.com/premium-vector/cute-cartoon-megaphone-vector-illustration_634248-73.jpg?w=2000" 
            alt='logo'
            objectFit='contain' fill />
        </div>
        <div className='mx-7 flex items-center xl:min-w-[300px]'>
            <HomeIcon className='h-5 w-5'/>
            <p className='flex-1 ml-2 hidden lg:inline'>Home</p>
            <ChevronDownIcon className='h-5 w-5'/>
        </div>
        <form className='flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1'>
            <SearchIcon className='h-6 w-6 text-gray-400'/>
            <input type="text" placeholder='Search' className='flex-1 bg-transparent outline-none'/>
            <button type="submit" hidden/>
        </form>
        <div className='items-center space-x-2 text-gray-500 mx-5 hidden lg:inline-flex'>
          
            <hr className='h-10 border border-gray-100'/>
            <ChatIcon className='icon' />
            <BellIcon className='icon' />
            <PlusIcon className='icon' />
        </div>
        <div className='ml-5 flex items-center lg:hidden'>
            <MenuIcon className = "icon" />
        </div>
        <div className='hidden lg:flex items-center space-x-2 border-gray-100 p-2 cursor-pointer'>
            <div className='relative h-5 w-5 flex-shrink-0'>
                <Image src="https://img.freepik.com/premium-vector/cute-cartoon-megaphone-vector-illustration_634248-73.jpg?w=2000"
                fill 
                objectFit='contain'
                alt="img"
                />
            </div>
            <p className='text-gray-400'>Sign In</p>
        </div>
    </div>
  )
}

export default Header
