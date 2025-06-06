"use client"
import Link from 'next/link'
import styles from "./header.module.css"
import { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';

const Navbar = () => {
  
  const [toggle,setToggle]=useState(false);
  return (
    <nav className={styles.navbar}>
        <div className={styles.navLinksWrapper}
            style={{
              clipPath: toggle && "polygon(0 0,100% 0,100% 100%,0 100%)" || " "
            }}
        >
        <ul className={styles.navLinks}>
      <Link onClick={()=>setToggle(false)} href="/" className={styles.navLink}> الرئيسية</Link>
      <Link onClick={()=>setToggle(false)} href="/articles" className={styles.navLink}> الأمراض </Link>
      <Link onClick={()=>setToggle(false)} href="/contact" className={styles.navLink}> من نحن</Link>
      <Link onClick={()=>setToggle(false)} href="/healthy" className={styles.navLink}> الحياة الصحية </Link>
        </ul></div>
     
        <div>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.png" 
              alt="Thssan Logo" 
              width={120} 
              height={40} 
              style={{ objectFit: 'contain' }}
            />
          </Link>
          <div className={styles.menu}>
            {toggle? (<IoMdClose onClick={()=>setToggle(prev=>!prev)}/>):(<FiMenu onClick={()=>setToggle(prev=>!prev)}/>)}
          </div>
        </div>
    </nav>
  )
}

export default Navbar
