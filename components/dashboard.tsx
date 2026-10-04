const stats = [
  { label: 'Prospects', value: '128' },
  { label: 'Campaigns', value: '6' },
  { label: 'Pilot revenue', value: '$12k' },
];

export function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Workspace dashboard</h1>
            <p className="text-slate-400">Manage prospects, campaigns, and outbound activity.</p>
          </div>
          <button className="rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-slate-950">
            New campaign
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <div className="text-sm text-slate-400">{stat.label}</div>
              <div className="mt-3 text-3xl font-bold">{stat.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Recent prospects</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>Northstar Labs</li>
              <li>Velocity Group</li>
              <li>Signal Forge</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-semibold">Campaign overview</h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>Outbound sequence: 3 steps</li>
              <li>Open rate estimate: 42%</li>
              <li>Avg. reply stage: demo booked</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
