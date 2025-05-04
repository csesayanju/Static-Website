const Section1 = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Our Vision
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                We strive to deliver creative designs that inspire and attract clients globally.
                Our team of passionate designers works tirelessly to bring your vision to life
                with innovative solutions and attention to detail.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/images/vision.jpg" 
                  alt="Our Vision" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;