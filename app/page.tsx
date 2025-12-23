"use client"

import { packageIncludes } from '@/lib/constants';

export default function Home() {

  return (
    <div className="bg-black p-5 text-white h-screen flex-col flex justify-center items-center w-full">
      <h1 className="text-5xl flex items-center gap-3 mb-8">Next Js - Boilerplate</h1>
      <div className="border p-5 rounded-xl border-none md:min-w-[500px] max-w-[600px] text-xl" style={{ boxShadow: "0 0 20px #0deb66" }}>
        {
          packageIncludes.map((x) => (
            <pre key={x.id} className="flex items-start gap-3 mb-2"><x.Icon size={25} /> {x.name}</pre>
          ))
        }
      </div>
    </div>
  );

}
