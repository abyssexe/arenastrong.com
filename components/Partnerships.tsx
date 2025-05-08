const partners = [
    {
      src: '/api/placeholder/180/80',
      alt: 'USA Boxing Logo',
    },
    {
      src: '/api/placeholder/180/80',
      alt: 'Lux Med Spa Logo',
    },
    {
      src: '/api/placeholder/180/80',
      alt: 'Magro Logo',
    },
    {
      src: '/api/placeholder/180/80',
      alt: 'Vasper Systems Logo',
    },
  ];
  
  export default function Partnerships() {
    return (
      <section id="partnerships" className="bg-[var(--primary)] text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6 relative after:absolute after:content-[''] after:w-20 after:h-1 after:bg-[var(--secondary)] after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:rounded">
            Our Partners
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-12 text-white">
            Arena Training Center is proudly partnered with leading wellness and medical providers
            to offer comprehensive health and performance solutions.
          </p>
  
          <div className="flex flex-wrap justify-center items-center gap-12 mb-12">
            {partners.map((partner, idx) => (
              <img
                key={idx}
                src={partner.src}
                alt={partner.alt}
                className="max-w-[180px] h-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
              />
            ))}
          </div>
  
          <p className="text-center max-w-3xl mx-auto text-white">
            Our partnership with Lux Med Spa/Magro provides members with access to peptide therapy,
            IV services, medically supervised weight loss programs, hormone therapy, and additional
            wellness services to complement your training regimen.
          </p>
        </div>
      </section>
    );
  }
  
