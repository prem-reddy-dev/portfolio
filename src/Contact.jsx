import React from "react";

export default function Contact() {
  return (
    <div style={{ maxWidth: '720px', margin: '2rem auto', fontFamily: 'Arial, sans-serif', color: '#111827', padding: '0 1rem' }}>
      <h2 style={{ fontSize: '2rem', borderBottom: '2px solid #3b82f6', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Contact</h2>

      <p><strong>Email:</strong> <a href="mailto:premreddy2405@gmail.com" style={{ color: '#2563eb' }}>premreddy2405@gmail.com</a></p>
      <p><strong>Phone:</strong> <a href="tel:+12162605404" style={{ color: '#2563eb' }}>+1 (216) 260-5404</a></p>
      <p><strong>Location:</strong> Omaha, Nebraska (Open to Remote & Onsite)</p>

      <p style={{ marginTop: '1rem' }}>
        <a href="https://www.linkedin.com/in/prem-reddy-kolan-326a17269" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', marginRight: '1rem' }}>
          LinkedIn
        </a>
        <a href="https://github.com/prem-reddy-dev" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', marginRight: '1rem' }}>
          GitHub
        </a>
        <a href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
          Resume
        </a>
      </p>
    </div>
  );
}




