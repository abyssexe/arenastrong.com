export default function About() {
    return (
      <section id="about" className="py-20 bg-[var(--dark)] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 relative after:absolute after:content-[''] after:w-20 after:h-1 after:bg-[var(--secondary)] after:left-1/2 after:-translate-x-1/2 after:-bottom-4 after:rounded">
            About Us
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 space-y-6">
              <p>Arena Training Center is Livermore’s premier Olympic training facility, officially recognized by USA Boxing as a leader in athletic performance and recovery. Our state-of-the-art center integrates elite-level training with advanced recovery technologies to enhance results and elevate athletic potential.</p>
              <p>We offer tailored programs for athletes at every stage — from beginners to Olympic contenders — focusing on physical conditioning, technical proficiency, mental resilience, and recovery. This holistic approach forms a comprehensive framework for sustained athletic excellence.</p>
              <p>Backed by world-class equipment and a highly specialized coaching team, Arena Training Center is a driving force in performance development throughout the Bay Area.</p>
            </div>
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl">
              <img
                src="/api/placeholder/600/400"
                alt="Arena Training Center Facility"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  
