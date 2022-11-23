import Head from 'next/head'
import React from 'react'
import Image from 'next/image'// must have this so as to import image 
import pic from '../public/1.jpg'
import HeaderItem from './HeaderItem'
import { 
       BadgeCheckIcon,
       CollectionIcon,
       HomeIcon,
       LightningBoltIcon,
       SearchIcon,
       UserIcon,
 } from "@heroicons/react/outLine";
function Header() {
  return (
    <header  className="flex flex-col sm:flex-row m-5 justify-between 
    items-center h-auto">
      <div className='flex  flex-grow justify-evenly max-w-2xl'>
        <HeaderItem  title='Home' Icon={HomeIcon} />
        <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
        <HeaderItem title = 'VERIFIED'  Icon={BadgeCheckIcon}/>
        <HeaderItem title = 'COLLECTION' Icon={CollectionIcon}/>
        <HeaderItem title='SEARCH' Icon={SearchIcon}/>
        <HeaderItem title='ACCOUNT' Icon={UserIcon}/>
      </div>
    <Image src={pic} alt="" width="100" height="50" />
    </header>
  )
}

export default Header
