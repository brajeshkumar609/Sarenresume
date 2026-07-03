import React from 'react';
import Link from 'next/link';
import { Navigation } from 'lucide-react';

export default function Header(){
  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">Saren</Link>
        <nav className="hidden md:flex gap-4 items-center">
          <a href="#about" className="text-sm text-muted-foreground">About</a>
          <a href="#work" className="text-sm text-muted-foreground">Experience</a>
          <a href="#projects" className="text-sm text-muted-foreground">Projects</a>
          <a href="#contact" className="text-sm px-3 py-2 bg-[rgba(255,255,255,0.04)] rounded-md">Contact</a>
        </nav>
        <button aria-label="menu" className="md:hidden p-2 rounded-md bg-[rgba(255,255,255,0.03)]">
          <Navigation size={18}/>
        </button>
      </div>
    </header>
  )
}
