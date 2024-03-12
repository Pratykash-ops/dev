import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Data from "@/data/Downloads.json"
import Head from 'next/head'
export default function Downloads() {
    const router = useRouter()
    const [Config, setConfig] = useState(null)
    useEffect(() => {
        const d= Data.downloads.find((o)=>o.slug==router.query.slug)
        setConfig(d || null)
    }, [router.query.slug])
    
  return (
    <div>
        <Head>
            {Config && <title>Download - {Config.name}</title>}
        </Head>
    <div className="hero min-h-screen bg-base-200">
  {Config && <div className="hero-content flex-col lg:flex-row px-28">
    <img src={Config.icon || "https://wallpapers.com/images/hd/question-mark-background-ttf33i45n9e32jzb.jpg"} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{Config.name}</h1>
      <p className="py-6">{Config.desc}</p>
      <button onClick={()=>router.push(Config.downloadLink)} className="btn btn-primary">Download</button>
    </div>
  </div>}
</div></div>
  )
}
