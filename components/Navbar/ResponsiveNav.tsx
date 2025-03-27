'use client';
import React, { useState } from 'react'
import Nav from '@/components/Navbar/Nav'
import MobileNav from '@/components/Navbar/MobileNav'

const ResponsiveNav = () => {
    const [showNav, setShowNav]=useState(false);
    const handNavShow = ()=>setShowNav(true);
    const handleCloseNav = ()=> setShowNav(false); 
  return (
    <div>
      <Nav openNav={handNavShow}/>
      <MobileNav showNav={showNav} closeNav={handleCloseNav}/>
    </div>
  )
}

export default ResponsiveNav
