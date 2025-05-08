type RecoveryItem = {
    icon: string;
    title: string;
    description: string;
  };
  
  const recoveryItems: RecoveryItem[] = [
    {
      icon: '❄️',
      title: 'Whole Body Cryotherapy',
      description:
        'Medical-grade cryotherapy chambers that rapidly cool the body to reduce inflammation, accelerate recovery, and enhance overall well-being.',
    },
    {
      icon: '🌊',
      title: 'Float Therapy',
      description:
        'Sensory deprivation float tanks that provide deep relaxation, reduce stress, and enhance mental clarity and recovery.',
    },
    {
      icon: '♨️',
      title: 'Infrared Sauna',
      description:
        'Advanced infrared technology that penetrates deeper than traditional saunas, promoting detoxification and cellular healing.',
    },
    {
      icon: '🦵',
      title: 'Compression Therapy',
      description:
        'Sequential compression systems that enhance circulation, reduce soreness, and accelerate the removal of metabolic waste.',
    },
    {
      icon: '⚡',
      title: 'Vasper Systems',
      description:
        'Revolutionary exercise platform that combines compression, cooling, and grounding technologies to maximize workout benefits.',
    },
    {
      icon: '📊',
      title: 'InBody 570 Analysis',
      description:
        'Comprehensive body composition analysis providing detailed metrics on muscle mass, body fat, water balance, and metabolic rate.',
    },
  ];
  
  export default function Recovery() {
    return (
      <section id="recovery" className="bg-[var(--dark)] text-foreground py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6 relative after:absolute after:content-[''] after:w-20 after:h-1 after:bg-[var(--secondary)] after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:rounded">
            Recovery & Biohacking
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-foreground">
            Our state-of-the-art recovery center offers cutting-edge technology to accelerate
            healing, reduce inflammation, and optimize performance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recoveryItems.map((item) => (
              <div
                key={item.title}
                className="text-center bg-background p-8 rounded-lg shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
