'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from 'emailjs-com'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  honey: z.string().optional()
})

type FormValues = z.infer<typeof schema>

export default function ContactForm(){
  const { register, handleSubmit, formState:{errors, isSubmitting}, reset } = useForm<FormValues>({resolver: zodResolver(schema)})

  async function onSubmit(data: FormValues){
    // basic honeypot
    if(data.honey) return;
    try{
      await emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_id', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_id', {
        from_name: data.name,
        from_email: data.email,
        message: data.message
      }, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'public_key')
      alert('Message sent — demo mode (replace env vars)')
      reset()
    }catch(e){
      console.error(e)
      alert('Failed to send — check env and EmailJS settings')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl">
      <input {...register('honey')} tabIndex={-1} className="hidden" />
      <label className="block">
        <span className="text-sm">Name</span>
        <input {...register('name')} className="mt-1 w-full p-3 rounded-md bg-white/2" />
        {errors.name && <span className="text-xs text-red-400">{errors.name.message}</span>}
      </label>

      <label className="block mt-3">
        <span className="text-sm">Email</span>
        <input {...register('email')} className="mt-1 w-full p-3 rounded-md bg-white/2" />
        {errors.email && <span className="text-xs text-red-400">{errors.email.message}</span>}
      </label>

      <label className="block mt-3">
        <span className="text-sm">Message</span>
        <textarea {...register('message')} rows={6} className="mt-1 w-full p-3 rounded-md bg-white/2" />
        {errors.message && <span className="text-xs text-red-400">{errors.message.message}</span>}
      </label>

      <div className="mt-4">
        <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-accent text-black rounded-md">Send Message</button>
      </div>
    </form>
  )
}
