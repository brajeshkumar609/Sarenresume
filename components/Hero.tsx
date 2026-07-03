'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero(){
  return (
    <section id="hero" className="min-h-[80vh] flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
        <div>
          <motion.h1 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.1}} className="text-4xl md:text-6xl font-extrabold leading-tight">
            Building reliable cloud & payments infrastructure — fast, secure, and auditable.
          </motion.h1>
          <motion.p initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.25}} className="mt-4 text-lg text-slate-300 max-w-xl">
            Principal engineer focused on automation, observability, and high-availability systems for enterprise hospitality and payment platforms.
          </motion.p>
          <div className="mt-6 flex gap-3">
            <a href="/resume.pdf" className="px-4 py-2 bg-accent text-black rounded-md font-medium">Download Resume</a>
            <a href="#contact" className="px-4 py-2 border border-white/10 rounded-md text-sm">Contact</a>
          </div>
        </div>
        <motion.div initial={{opacity:0,scale:0.98}} animate={{opacity:1,scale:1}} transition={{delay:0.35}} className="relative w-full h-80 md:h-96">
          <Image src="/placeholder.png" alt="Saren" fill style={{objectFit:'cover'}} className="rounded-2xl shadow-2xl border border-white/6" priority/>
        </motion.div>
      </div>
    </section>
  )
}
