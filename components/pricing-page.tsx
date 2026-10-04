const plans = [
  {
    name: 'Pilot',
    price: '$3,000-$5,000',
    description: 'A fixed-fee package for a focused outbound launch.',
    features: ['300 target accounts', 'Custom scripts', 'Pitch room setup', 'Launch support'],
    highlight: true,
  },
  {
    name: 'Starter',
    price: '$499/mo',
    description: 'For small sales teams getting started.',
    features: ['300 personalized videos', '2 avatars', 'Pitch room hosting', 'Analytics'],
  },
  {
    name: 'Growth',
    price: '$1,499/mo',
    description: 'For teams scaling outbound motion quickly.',
    features: ['2,500 videos', 'Unlimited avatars', 'CRM export', 'Advanced analytics'],
  },
  {
    name: 'Enterprise',
    price: '$3,499/mo',
    description: 'Built for larger GTM organizations.',
    features: ['10,000+ videos', 'Custom voice', 'White-label', 'Onboarding support'],
  },
];

export function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Pricing</p>
          <h1 className="mt-4 text-4xl font-black">Simple pricing for sales teams.</h1>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-6 ${
                plan.highlight ? 'border-cyan-500 bg-cyan-500/5' : 'border-slate-800 bg-slate-900'
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

              <button className="mt-6 w-full rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-slate-950">
                {plan.name === 'Pilot' ? 'Start a pilot' : 'Choose plan'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
