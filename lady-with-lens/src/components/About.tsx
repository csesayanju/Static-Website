const About = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-gray-50 text-gray-800">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center md:text-left">
          About Us
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              LadyWithLens is a premium graphic design and photography service provider committed to delivering
              exceptional visuals that capture your story.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/images/about.jpg" 
                alt="About LadyWithLens" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
  