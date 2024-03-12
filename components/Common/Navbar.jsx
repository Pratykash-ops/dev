import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import LoginBtn from '../plugins/Login'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  useEffect(()=>{
    if(localStorage){
      const d = localStorage.getItem("hyosan_player_token")
      if(d){
        setUser(true)
      }
    }
  }, [])
  return <>
  <div className="navbar fixed text-neutral bg-base-100/20 z-[999]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-base-100/40">
        <li><Link href={"/"}>Home</Link></li>
        <li>
          Download
          <ul className="p-2">
            <li><Link href={"/downloads/mc-pe"}>Minecraft PE</Link></li>
            <li><Link href={"/downloads/mc-je"}>Minecraft JE</Link></li>
          </ul>
        </li>
        <li><Link href={"#"}>Resources</Link></li>
      </ul>
    </div>
    <Link href={"/"}><span className="btn btn-ghost text-xl">Hyosan</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href={"/?home=1"}>Home</Link></li>
      <li>
        <details>
          <summary>Downloads</summary>
          <ul className="p-2">
            <li><Link href={"/downloads/mc-pe"}>Minecraft PE</Link></li>
            <li><Link href={"/downloads/mc-je"}>Minecraft JE</Link></li>
          </ul>
        </details>
      </li>
      <li><Link href={"/resources"}>Resources</Link></li>
      <li><Link href={"/join"}>Join Us now</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    {
    <Link href={"/login"}>
      <LoginBtn/>
    </Link>}
  </div>
</div>
  </>
}