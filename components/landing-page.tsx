import Link from 'next/link';

const features = [
  {
    title: 'AI-generated scripts',
    description: 'Turn each target account into a relevant, personalized message in seconds.',
  },
  {
    title: 'Pitch rooms',
    description: 'Deliver a custom account page that feels built for the prospect.',
  },
  {
    title: 'Campaign tracking',
    description: 'See which outreach drives replies and optimize in real time.',
  },
];

const plans = [
  {
    name: 'Pilot',
    price: '$3,000-$5,000',
    description: 'Fixed-fee launch package for a focused outbound campaign.',
    features: ['300 target accounts', 'Custom scripts', 'Pitch room setup', 'Launch support'],
    highlight: true,
  },
  {
    name: 'Starter',
    price: '$499/mo',
    description: 'For lean sales teams getting started.',
    features: ['300 personalized videos', '2 avatars', 'Pitch room hosting', 'Analytics'],
  },
  {
    name: 'Growth',
    price: '$1,499/mo',
    description: 'For teams scaling outbound motion fast.',
    features: ['2,500 videos', 'Unlimited avatars', 'CRM export', 'Advanced analytics'],
  },
  {
    name: 'Enterprise',
    price: '$3,499/mo',
    description: 'For larger operational GTM teams.',
    features: ['10,000+ videos', 'Custom voice', 'White-label', 'Onboarding support'],
  },
];

export function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="mx-auto max-w-7xl px-6 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-cyan-500" />
            <div className="text-xl font-bold">PitchPulse AI</div>
          </div>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <Link href="#features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/pitch-room">Demo</Link>
          </div>

          <Link
            href="/signup"
            className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950"
          >
            Start a pilot
          </Link>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-20 pt-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
              AI-powered personalized outreach
            </p>

            <h1 className="max-w-xl text-5xl font-black leading-tight tracking-tight">
              PitchPulse AI helps B2B teams turn cold outreach into personalized sales conversations.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-slate-300">
              Generate AI-powered video outreach, custom pitch rooms, and tailored scripts for your
              highest-value accounts.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/pricing"
                className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950"
              >
                Book a demo
              </Link>
              <Link
                href="/signup"
                className="rounded-full border border-slate-700 px-6 py-3 font-semibold text-white"
              >
                Start a pilot
              </Link>
            </div>

            <div className="mt-10 flex gap-8 text-sm text-slate-400">
              <div>
                <div className="text-2xl font-bold text-white">300+</div>
                <div>target accounts</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">7 days</div>
                <div>pilot turnaround</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">4.9/5</div>
                <div>sales feedback</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-glow">
            <div className="rounded-2xl bg-slate-950 p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-slate-400">Campaign preview</span>
                <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs text-emerald-300">
                  Live
                </span>
              </div>

              <div className="space-y-4">
                <div className="rounded-xl bg-slate-800 p-4">
                  <div className="text-xs uppercase tracking-wide text-slate-400">Account</div>
                  <div className="mt-2 font-semibold">Northstar Labs</div>
                  <div className="text-sm text-slate-400">B2B SaaS • Growth team</div>
                </div>

                <div className="rounded-xl bg-slate-800 p-4">
                  <div className="text-xs uppercase tracking-wide text-slate-400">Script</div>
                  <p className="mt-2 text-sm text-slate-200">
                    “I noticed your team is scaling outbound quickly. We built a system that creates
                    personalized video outreach and pitch rooms for target accounts so the message feels
                    relevant instead of mass-produced.”
                  </p>
                </div>

                <div className="rounded-xl bg-slate-800 p-4">
                  <div className="text-xs uppercase tracking-wide text-slate-400">CTA</div>
                  <div className="mt-2 text-sm text-cyan-300">Book a 15-minute demo</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Why teams switch
            </p>
            <h2 className="mt-3 text-3xl font-bold">Everything your team needs to personalize outreach.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <div className="mb-4 h-10 w-10 rounded-xl bg-cyan-500/15" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-3 text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="bg-slate-900 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Pricing</p>
              <h2 className="mt-3 text-3xl font-bold">Simple pricing for modern sales teams.</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-4">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl border p-6 ${
                    plan.highlight
                      ? 'border-cyan-500 bg-cyan-500/5 shadow-lg shadow-cyan-500/10'
                      : 'border-slate-800 bg-slate-950'
                  }`}
                >
                  <div className="text-sm uppercase tracking-[0.2em] text-slate-400">{plan.name}</div>
                  <div className="mt-4 text-3xl font-black">{plan.price}</div>
                  <p className="mt-3 text-slate-300">{plan.description}</p>

                  <ul className="mt-5 space-y-2 text-sm text-slate-300">
                    {plan.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>

                  <Link
                    href="/signup"
                    className="mt-6 block w-full rounded-xl bg-cyan-500 px-4 py-3 text-center font-semibold text-slate-950"
                  >
                    {plan.name === 'Pilot' ? 'Start a pilot' : 'Choose plan'}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Book a demo
                </p>
                <h3 className="mt-4 text-3xl font-bold">See how personalized outreach looks in practice.</h3>
                <p className="mt-4 text-slate-300">
                  We’ll show you a real prospect example, the generated script, and a pitch-room page we
                  could deploy for your next target account.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-950 p-6">
                <div className="space-y-4">
                  <input
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none"
                    placeholder="Work email"
                  />
                  <input
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none"
                    placeholder="Company"
                  />
                  <Link
                    href="/signup"
                    className="block w-full rounded-xl bg-cyan-500 px-4 py-3 text-center font-semibold text-slate-950"
                  >
                    Request a demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
