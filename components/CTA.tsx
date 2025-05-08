export default function CTA() {
    return (
      <section
        className="bg-center bg-cover bg-no-repeat relative text-white py-24 text-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/api/placeholder/1200/400')",
        }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Begin Your Transformation Today</h2>
          <p className="mb-8 text-lg">
            Experience the difference at Arena Training Center – where elite training meets
            cutting-edge recovery technology.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[var(--secondary)] hover:bg-[#a3001f] text-white px-8 py-3 rounded font-semibold text-sm tracking-wider uppercase transition shadow-md hover:-translate-y-1"
          >
            Schedule a Tour
          </a>
        </div>
      </section>
    );
  }
  