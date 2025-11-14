import Image from 'next/image';

export default function PeopleStrip() {
  return (
    <section className="relative w-full" aria-labelledby="people-strip-heading">
      {/* dotted background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,0,0,0.06) 1.2px, transparent 1.2px)',
          backgroundSize: '28px 28px',
          backgroundPosition: '0 0',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-2">
        <h2 id="people-strip-heading" className="sr-only">People</h2>

        <div className="flex items-center">
          <div className="relative -ml-8 sm:-ml-14 md:-ml-20 lg:-ml-28">
            <Image
              src="/ppl walking final.png"
              alt="People moving forward"
              width={450}
              height={280}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}


