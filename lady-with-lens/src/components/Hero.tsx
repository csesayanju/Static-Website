const Hero = () => (
    <section
      className="bg-cover bg-center text-black h-[500px] flex items-center justify-center"
      style={{ backgroundImage: "url('/hero-image.jpg')" }}
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to LadyWithLens</h1>
        <p className="mt-4 text-lg md:text-2xl">Capture your moments with elegance and creativity.</p>
      </div>
    </section>
  );
  
  export default Hero;
  