import react from "react"
import data from "@/data/Resources.json"
import { useRouter } from "next/router"
export default function Resources(){
  const router = useRouter()
  let preCss = [
    "to-green-500",
    'to-sky-500'
  ]
    return <>
    <div className="hero min-h-[70vh] bg-gradient-to-b from-green-800 to-base-100">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Resources of the server.</h1>
      <p className="py-6">Need help on the server, You&apos;re at the right place</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
<section>
    <h2 className="text-5xl text-center p-5">Resources</h2>
    <div className="grid grid-cols-3 px-8 py-2">
      {data._.map((d, i)=><>
        <div className={`card w-96 bg-gradient-to-t from-transparent to-${i/2==0?"green":"sky"}-500 `}>
  <div className="card-body">
    <h2 className="card-title">{d.name}</h2>
    <p>{d.desc}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>router.push(`/resources/${d.slug}`)} className="btn">view</button>
    </div>
  </div>
</div>
      </>)}
    </div>
</section>
    </>
}