import '../styles/globals.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

export const metadata = {
  title: 'Saren — Cloud & Payments Engineer',
  description: 'Principal Cloud, Infrastructure & Payments Engineer — Reliability, Security, Automation.'
}

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-24">
          <Hero />
          {children}
          <Projects />
        </main>
      </body>
    </html>
  )
}
