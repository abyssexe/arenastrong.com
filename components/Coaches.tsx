const coaches = [
  {
    id: 1,
    name: 'John Davis',
    title: 'Olympic Boxing Coach',
    image: '/images/coach-boxing.jpg',
    alt: 'Boxing Coach',
    bio: 'USA Boxing certified coach with extensive experience developing elite competitors. Specializes in technical development and competition preparation.',
  },
  {
    id: 2,
    name: 'Lisa Kim',
    title: 'Performance Specialist',
    image: '/images/coach-performance.jpg',
    alt: 'Performance Coach',
    bio: 'NSCA certified strength and conditioning specialist with expertise in functional training and athletic development for various sports.',
  },
  {
    id: 3,
    name: 'Marco Alvarez',
    title: 'Jiu Jitsu Coach',
    image: '/images/coach-jiujitsu.jpg',
    alt: 'Jiu Jitsu Coach',
    bio: 'Black belt instructor with competition experience and specialized training in adaptive techniques for practitioners of all abilities.',
  },
  {
    id: 4,
    name: 'Tina Lee',
    title: 'Recovery Specialist',
    image: '/images/coach-recovery.jpg',
    alt: 'Recovery Specialist',
    bio: 'Certified in trauma-informed coaching with expertise in adaptive mobility training and therapeutic recovery protocols.',
  },
];

export default function Coaches() {
  return (
    <section id="coaches" className="scroll-mt-24 py-20 bg-[var(--primary)] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Expert Coaches</h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-gray-300">
          Our certified and experienced coaching staff specialize in various disciplines with advanced training in neurodivergent and adaptive mobility techniques.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {coaches.map((coach) => (
            <div
              key={coach.id}
              className="bg-white/5 rounded-lg overflow-hidden shadow-lg text-center hover:-translate-y-1 transition"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={coach.image}
                  alt={coach.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{coach.name}</h3>
                <p className="text-[var(--secondary)] font-medium mb-2">{coach.title}</p>
                <p className="text-sm text-gray-300">{coach.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

