# Static portfolio (Vanilla HTML/CSS/JS)

This repository has been rewritten as a static, beginner-friendly portfolio site using only HTML, CSS and vanilla JavaScript with a small set of optional CDN libraries.

How to run

- Open index.html in your browser (locally) or deploy to GitHub Pages / Vercel as a static site.

Required edits before production

- Replace placeholders in /js/email.js: set your EmailJS user id (emailjs.init('YOUR_USER_ID')), set service_id and template_id.
- Update meta tags in index.html (title, og:url) and robots/sitemap with your production domain.
- Replace images in /images and resume in /resume.

Why this structure

- No build step required, no Node or npm dependencies. All libraries load from CDN so the project is easy to host and maintain.

Customization

- Edit HTML sections in index.html. All copy lives in the HTML for simplicity.
- Styles are modularized into css/*. JS logic is split across js/*. Keep functions small and commented.

Accessibility & SEO

- Semantic HTML, ARIA attributes on forms, skip link, proper headings.

