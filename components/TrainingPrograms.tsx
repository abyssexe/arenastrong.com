type Program = {
    title: string;
    description: string;
    image: string;
    alt: string;
  };
  
  const programs: Program[] = [
    {
      title: 'Olympic Boxing',
      description:
        'Official USA Boxing training programs designed by Olympic-level coaches. Develop proper technique, conditioning, and mental toughness through structured training plans for all skill levels.',
      image: '/api/placeholder/400/200',
      alt: 'Boxing Training',
    },
    {
      title: 'Performance Bootcamp',
      description:
        'High-intensity functional training that builds strength, endurance, and mental resilience. Our bootcamps emphasize full-body conditioning, metabolic training, and athletic performance.',
      image: '/api/placeholder/400/200',
      alt: 'Bootcamp Training',
    },
    {
      title: 'Jiu Jitsu',
      description:
        'Learn the art of ground fighting and submission grappling under expert guidance. Our Jiu Jitsu program focuses on technique, leverage, and strategic thinking for practitioners of all levels.',
      image: '/api/placeholder/400/200',
      alt: 'Jiu Jitsu Training',
    },
    {
      title: 'Open Gym & Powerlifting',
      description:
        'Access to state-of-the-art strength training equipment and specialized powerlifting guidance. Build raw strength and power with professional programming and technique coaching.',
      image: '/api/placeholder/400/200',
      alt: 'Open Gym & Powerlifting',
    },
  ];
  
  export default function TrainingPrograms() {
    return (
      <section id="services" className="bg-[var(--dark)] text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 relative after:absolute after:content-[''] after:w-20 after:h-1 after:bg-[var(--secondary)] after:left-1/2 after:-translate-x-1/2 after:-bottom-4 after:rounded">
            Training Programs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <div
                key={program.title}
                className="bg-background bg-opacity-5 rounded-lg overflow-hidden shadow-md hover:-translate-y-1 transition"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.alt}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--secondary)] mb-3">{program.title}</h3>
                  <p className="text-gray-300">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
