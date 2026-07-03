// email.js - EmailJS integration (client-side). Replace placeholders with your EmailJS values.
// No backend required. Keep honeypot to reduce spam. Ensure you set user ID in README before deploying.

window.addEventListener('DOMContentLoaded', ()=>{
  const form = document.getElementById('contact-form');
  if(!form || !window.emailjs) return;

  // Initialize EmailJS - replace 'YOUR_USER_ID' with your EmailJS user ID in the README before deploy
  try{ emailjs.init('YOUR_USER_ID'); }catch(e){console.warn('emailjs init failed',e) }

  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const status = document.getElementById('form-status');
    const honeypot = document.getElementById('honeypot');
    if(honeypot && honeypot.value) return; // spam

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name || !email || !message){ status.textContent = 'Please complete all required fields.'; return; }

    status.textContent = 'Sending...';
    try{
      // Replace service_id and template_id with real values
      const resp = await emailjs.send('service_id','template_id',{from_name:name,from_email:email,message:message});
      status.textContent = 'Message sent — thank you!';
      form.reset();
    }catch(err){
      console.error(err);
      status.textContent = 'Failed to send message — please try again later.';
    }
  });
});
