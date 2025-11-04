export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(180deg, #83A6E5 0%, #FFFFFF 100%)',
        }}
        aria-hidden="true"
      />
      <div className="relative h-[400px]">
        {/* Large blurred text */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center select-none whitespace-nowrap overflow-hidden"
          style={{
            fontSize: 'min(15vw, 180px)',
            fontWeight: '700',
            color: 'rgba(255, 255, 255, 0.4)',
            letterSpacing: '0.05em',
            lineHeight: '1'
          }}
          aria-hidden="true"
        >
          CREST GLOBAL
        </div>
      </div>
    </footer>
  );
}
