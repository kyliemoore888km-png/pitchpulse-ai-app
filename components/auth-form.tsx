'use client';

import { useState } from 'react';

export function AuthForm() {
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setMessage('');

    const endpoint = isSignup ? '/api/auth/signup' : '/api/auth/login';
    const payload = isSignup ? { email, password, fullName } : { email, password };

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Authentication failed');
      }

      setMessage(`${isSignup ? 'Account created' : 'Signed in'} successfully.`);
      setEmail('');
      setPassword('');
      setFullName('');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-10 text-white">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-glow">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">PitchPulse AI</div>
            <h1 className="mt-2 text-3xl font-bold">{isSignup ? 'Create account' : 'Welcome back'}</h1>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {isSignup && (
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none"
              placeholder="Full name"
            />
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none"
            placeholder="Work email"
            type="email"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none"
            placeholder="Password"
            type="password"
          />

          <button
            disabled={sending}
            className="w-full rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-slate-950 disabled:opacity-60"
            type="submit"
          >
            {sending ? 'Please wait...' : isSignup ? 'Create account' : 'Sign in'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-400">
          {isSignup ? 'Already have an account?' : "Need an account?"}{' '}
          <button className="font-semibold text-cyan-300" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? 'Sign in' : 'Create account'}
          </button>
        </div>

        {message && <div className="mt-4 text-sm text-cyan-300">{message}</div>}
      </div>
    </div>
  );
}
