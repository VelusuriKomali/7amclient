"use client"
import React, {useState,Fragment,useEffect} from 'react'
import styles from'./Menu.module.css'
import Link from 'next/link';
import {usePathname} from 'next/navigation'
import menuItems from './configuration.json'


const Menu = () => {
  const [isMobileMenu,setIsMobileMenu]=useState();
  const [left,setLeft]=useState(-150)
  const [menuItem,setMenuItem]=useState("")
  const pathname=usePathname()
  useEffect(()=>{
   setMenuItem(pathname?.slice(1) || 'home');
   setIsMobileMenu(window?.document?.body?.clientWidth>700?false:true);
   window.addEventListener("resize",fnResize)
  },[])
/**
 * To listen window resizing
 */
const fnResize=()=>{
if(window?.document?.body?.clientWidth<700){
  setIsMobileMenu(true)
}else{
  setIsMobileMenu(false);
}}
const handleMobileMenuBtnClick=()=>{
  setLeft(left==0 ?-150:0)
}
const handleMenuItemClick=(eve,item)=>{
  eve.stopPropagation();
  setMenuItem(item)
  setLeft(-150)
}
 return <Fragment className="mb-5">
    {isMobileMenu && <button onClick={handleMobileMenuBtnClick} className='mobileMenuBtn'>
      <span></span>
      <span></span>
      <span></span>
    </button>

}
    <ul  style={{left}} className={isMobileMenu ? styles.mobileMenu:styles.menu}>
    {
        menuItems.map(({id, item, link},ind)=>{
        return <li key={`li_${ind}`}><Link 
          onClick={(eve) => {
             handleMenuItemClick(eve,id)
            }} 
           className={menuItem === id ? styles.menuActive: ''}
           href={link}>
           {item}
           </Link>
           </li>
        })
    } 
        
        
      { /* <li><Link className={menuItem==='home' ? styles.menuActive: ''}onClick={(eve)=>{
          handleMenuItemClick(eve,"home")}}  href="/home">Home</Link></li>
        <li><Link className={menuItem==='users' ? styles.menuActive: ''}onClick={(eve)=>{ handleMenuItemClick(eve,"users")}} href="./users">Users</Link></li>
        <li><Link className={menuItem==='profile' ? styles.menuActive: ''}onClick={(eve)=>{ handleMenuItemClick(eve,"profile")}} href="./profile">Profile</Link></li>
        <li><Link className={menuItem==='contact' ? styles.menuActive: ''}onClick={(eve)=>{handleMenuItemClick(eve,"contact") }} href="./contact">Contact</Link></li>
      */}
        </ul>
    
    </Fragment>
    }
export default Menu
