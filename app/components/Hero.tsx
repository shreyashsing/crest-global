'use client';

export default function Hero() {
  return (
    <div className="relative w-full bg-white">
      {/* Hero Section with Blue Background */}
      <div className="relative overflow-hidden min-h-[70vh] rounded-b-3xl bg-white">
        {/* Blue gradient background */}
        <div 
          className="absolute inset-0 rounded-b-3xl"
          style={{
            background: 'linear-gradient(180deg, #4D77BE 19.58%, #09224D 92.19%)',
          }}
        />
        
        {/* Header semi-transparent overlay */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-blue-900/20 backdrop-blur-sm z-10" />
        
        {/* Blurred Shapes Background */}
        <div className="absolute inset-0 overflow-hidden rounded-b-3xl">
          {/* Large diamond shape - upper left */}
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-700/25 blur-3xl rotate-45 rounded-lg" />
          
          {/* Medium diamond shape - mid right */}
          <div className="absolute top-40 right-32 w-48 h-48 bg-blue-700/30 blur-3xl rotate-45 rounded-lg" />
          
          {/* Small diamond shape - lower left */}
          <div className="absolute bottom-32 left-20 w-32 h-32 bg-blue-700/25 blur-3xl rotate-45 rounded-lg" />
          
          {/* Square shape - far right */}
          <div className="absolute top-32 right-10 w-56 h-56 bg-blue-700/20 blur-3xl rotate-12 rounded-lg" />
          
          {/* Additional subtle shapes */}
          <div className="absolute bottom-20 right-40 w-40 h-40 bg-blue-700/20 blur-3xl rotate-45 rounded-lg" />
          <div className="absolute top-60 left-1/3 w-36 h-36 bg-blue-700/25 blur-3xl rotate-45 rounded-lg" />
        </div>

        {/* White/Blue Glow Spot - center bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-white/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] bg-blue-300/50 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] bg-blue-200/60 rounded-full blur-xl" />
      </div>

      {/* White Section Below */}
      <div className="relative bg-white min-h-[30vh] pt-8">
        {/* Space reserved for future image in lower-left corner */}
        {/* Image will be added here later */}
      </div>
    </div>
  );
}

