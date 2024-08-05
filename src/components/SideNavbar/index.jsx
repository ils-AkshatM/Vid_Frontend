import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';
import { BsCollectionPlay } from 'react-icons/bs';
import { CiSettings } from 'react-icons/ci';
import { FaRegCommentDots } from 'react-icons/fa';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { LiaUserCheckSolid } from 'react-icons/lia';
import { LuHistory } from 'react-icons/lu';
import { RxQuestionMarkCircled } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { victory } from '../../assets';

// SidebarItem Component
const SidebarItem = ({ to, icon: Icon, label, isHeader = false }) => (
  <Link to={to} className={`flex items-center px-4 py-2 mt-5 ${isHeader ? 'text-gray-700 bg-gray-100' : 'text-gray-600 hover:bg-gray-200'}`}>
    <span className="text-xl"><Icon /></span>
    <span className="mx-4 font-medium">{label}</span>
  </Link>
);

const Sidebar = () => {
  const menuItems = [
    { to: '/', icon: AiOutlineHome, label: 'Home', isHeader: true, showOnMobile: true },
    { to: '/liked', icon: BiLike, label: 'Liked Videos', showOnMobile: true },
    { to: '/history', icon: LuHistory, label: 'History', showOnMobile: true },
    { to: '/channel', icon: GoDeviceCameraVideo, label: 'My Channel', showOnMobile: false }, // Hidden on mobile
    { to: '/studio', icon: BsCollectionPlay, label: 'My Studio', showOnMobile: false }, // Hidden on mobile
    { to: '/subscriptions', icon: LiaUserCheckSolid, label: 'Subscriptions', showOnMobile: true },
    { to: '/tweets', icon: FaRegCommentDots, label: 'Tweets', showOnMobile: true },
  ];

  const supportItems = [
    { to: '/support', icon: RxQuestionMarkCircled, label: 'Support', showOnMobile: true },
    { to: '/settings', icon: CiSettings, label: 'Settings', showOnMobile: false }, // Hidden on mobile
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar for larger screens */}
      <div className="hidden md:flex w-64 bg-white border-r flex-col">
        <div className="flex items-center justify-center h-16 border-b">
          <h2 className='font-semibold'>StandOut</h2>
          <img src={victory} alt="Logo" className="h-24 w-24" />
        </div>
        <nav className="mt-10">
          {menuItems.map((item, index) => (
              window.innerWidth >= 768 ? ( // Show if on mobile or larger screens
              <SidebarItem key={index} {...item} />
            ) : null
          ))}
        </nav>
        <div className="mt-auto">
          {supportItems.map((item, index) => (
            item.showOnMobile || window.innerWidth >= 768 ? ( // Show if on mobile or larger screens
              <SidebarItem key={index} {...item} />
            ) : null
          ))}
        </div>
      </div>

      {/* Sticky footer for mobile screens */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around items-center p-2 shadow-lg">
        {menuItems.map((item, index) => (
          item.showOnMobile && ( // Only show items marked for mobile
            <Link key={index} to={item.to} className="flex flex-col items-center text-xs font-medium">
              <span className="text-xl"><item.icon /></span>
              <span>{item.label}</span>
            </Link>
          )
        ))}
      </div>
    </div>
  );
};

export default Sidebar;