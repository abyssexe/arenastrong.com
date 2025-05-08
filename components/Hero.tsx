export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg" // Replace with your actual image
          alt="Hero Background"
          className="w-full h-full object-cover blur-sm brightness-75"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase mb-4">
          Welcome to Arena
        </h1>
        <p className="mb-6 text-lg">
          The premier destination for comprehensive athletic development. Whether you're a dedicated fitness enthusiast or an elite-level competitor, our facility offers state-of-the-art equipment, expert coaching, and advanced recovery technologies to help you achieve your highest potential.
        </p>

        {/* Buttons side by side */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://arenastrong.sites.zenplanner.com/sign-up-now.cfm"
            className="inline-block bg-[var(--secondary)] hover:bg-[#a3001f] text-white px-6 py-3 rounded font-semibold uppercase tracking-wider shadow hover:-translate-y-1 transition"
          >
            Join Now
          </a>
          <a
            href="https://arenastrong.sites.zenplanner.com/calendar.cfm"
            className="inline-block border border-white text-white px-6 py-3 rounded font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition shadow"
          >
            See Schedule
          </a>
        </div>
      </div>
    </section>
  );
}
