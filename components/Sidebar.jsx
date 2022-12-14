// NextJS
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';

// Components
import SidebarMenuItem from './SidebarMenuItem';

// Icons
import { HomeIcon } from '@heroicons/react/24/solid';
import { HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, ClipboardIcon, UserIcon, EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {

    const { data: session } = useSession();

    return(
        <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24'>
            {/* Twitter Logo */}
            <div className='hoverEffect p-0 hover:bg-blue-100 xl:px-2 h-[50px] mt-3'>
                <Image width='35' height='30' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png' />
            </div>

            {/* Menu */}
            <div className='mt-4 mb-2.5 xl:items-start'>
                <SidebarMenuItem text='Home' Icon={HomeIcon} active />
                <SidebarMenuItem text='Explore' Icon={HashtagIcon} />
                {session && (
                    <>
                        <SidebarMenuItem text='Notifications' Icon={BellIcon} />
                        <SidebarMenuItem text='Messages' Icon={InboxIcon} />
                        <SidebarMenuItem text='Bookmarks' Icon={BookmarkIcon} />
                        <SidebarMenuItem text='Lists' Icon={ClipboardIcon} />
                        <SidebarMenuItem text='Profile' Icon={UserIcon} />
                        <SidebarMenuItem text='More' Icon={EllipsisHorizontalCircleIcon} />
                    </>
                )}
            </div>

            {session ? (
                <>
                    <button className='bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'>Tweet</button>
                    <div className='hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto'>
                        <img 
                        src={session.user.image}
                        alt='user-img'
                        className='h-10 w-10 rounded-full xl:mr-2'
                        onClick={signOut}
                        />
                        <div className='leading-5 hidden xl:inline'>
                            <h4 className='font-bold text-sm'>{session.user.name}</h4>
                            <p className='text-gray-500 text-sm'>@{session.user.username}</p>
                        </div>
                        <EllipsisHorizontalIcon className='h-5 xl:ml-8 hidden xl:inline' />
                    </div>
                </>
            ) : (
                <button onClick={signIn} className='bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'>Sign in</button>
            )}

        </div>
    );
} 