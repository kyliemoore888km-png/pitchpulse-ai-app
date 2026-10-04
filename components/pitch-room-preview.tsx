export function PitchRoomPreview() {
  return (
    <div className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900 p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-cyan-300">Northstar Labs</div>
            <h1 className="mt-2 text-3xl font-bold">AI-powered personalized outreach</h1>
          </div>
          <button className="rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-slate-950">
            Book a demo
          </button>
        </div>

        <div className="rounded-2xl bg-slate-950 p-6">
          <p className="text-lg text-slate-200">
            We noticed your team is growing quickly and likely scaling outbound. We built a system that
            creates tailored AI outreach and pitch-room experiences for each target account so the
            message feels relevant, credible, and high-intent.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
            <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Script</div>
            <p className="mt-3 text-slate-300">
              “I noticed your outbound has momentum. We help teams personalize each sequence without
              sacrificing speed.”
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
            <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Offer</div>
            <p className="mt-3 text-slate-300">
              Build a pilot campaign for 300 target accounts and see how personalization impacts reply
              quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
