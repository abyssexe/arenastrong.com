export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
      {/* Blurred background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.jpg" // replace with your actual image
          alt="Arena Hero Background"
          className="w-full h-full object-cover blur-sm brightness-75"
        />
        {/* Optional: overlay gradient on top of image for added contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase mb-4">
          Welcome to Arena
        </h1>
        <p className="mb-6 text-lg">
          The premier destination for comprehensive athletic development. Whether you're a dedicated fitness enthusiast or an elite-level competitor, our facility offers state-of-the-art equipment, expert coaching, and advanced recovery technologies to help you achieve your highest potential.
        </p>
        <a
          href="#contact"
          className="inline-block bg-[var(--secondary)] hover:bg-[#a3001f] text-white px-6 py-3 rounded font-semibold transition uppercase tracking-wider shadow hover:-translate-y-1"
        >
          Join Now
        </a>
      </div>
    </section>
  );
}

