'use client';

import { useState } from 'react';

export default function Home() {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('60min-inperson');
  const [message, setMessage] = useState('');

  const services = [
    { value: '30min-distance', label: '30 min Distance Reiki', price: '$65' },
    { value: '60min-inperson', label: '60 min In-Person Reiki', price: '$120' },
    { value: '90min-inperson', label: '90 min In-Person Reiki', price: '$170' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Booking submitted! Your Reiki healer will confirm soon. (Demo mode)');
    // Real Supabase/Stripe goes here later
  };

  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #f3e8ff, #fce7f3)', padding: '2rem', fontFamily: 'system-ui' }}>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', fontSize: '3rem', background: 'linear-gradient(to right, #7c3aed, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Reiki Healing Sessions
        </h1>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#6b7280', marginBottom: '2rem' }}>
          Restore balance and release stress with personalized energy healing.
        </p>
        <form onSubmit={handleSubmit} style={{ background: 'white', padding: '2rem', borderRadius: '1rem', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Service</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.5rem' }}
              required
            >
              {services.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label} — {s.price}
                </option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.5rem' }}
              required
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.5rem' }}
              required
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              style={{ width: '100%', padding: '0.75rem', border: '1px solid #d1d5db', borderRadius: '0.5rem' }}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              background: 'linear-gradient(to right, #7c3aed, #ec4899)',
              color: 'white',
              padding: '1rem',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Book My Session
          </button>

          {message && (
            <p style={{ textAlign: 'center', color: '#059669', marginTop: '1rem', fontWeight: 'bold' }}>
              {message}
            </p>
          )}
        </form>
      </div>
    </main>
  );
}
