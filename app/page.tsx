import dynamic from 'next/dynamic'

const ContactForm = dynamic(() => import('../components/ContactForm'), { ssr: false })

export default function Home(){
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <section id="about" className="py-10">
        <h2 className="text-2xl font-semibold">About</h2>
        <p className="mt-3 text-slate-300">Senior engineer with deep experience in cloud platforms, payments integrations and hospitality-grade reliability engineering. Leader of cross-functional teams, advocate for automation, security, and operational excellence.</p>
      </section>

      <section id="work" className="py-10">
        <h2 className="text-2xl font-semibold">Experience</h2>
        <p className="mt-3 text-slate-300">Enterprise roles leading platform, SRE, and payment systems. Contact for detailed CV.</p>
      </section>

      <section id="contact" className="py-10">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="mt-4">
          <ContactForm />
        </div>
      </section>
    </section>
  )
}
