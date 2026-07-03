'use client'
import React from 'react'
import { projects } from '../data/projects'
import { motion } from 'framer-motion'

export default function Projects(){
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(p=> (
            <motion.article key={p.id} className="card-glass p-6" whileHover={{y:-6}} transition={{type:'spring',stiffness:300}}>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-slate-300 mt-2">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map(t => (
                  <span key={t} className="text-xs px-2 py-1 bg-white/3 rounded">{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
