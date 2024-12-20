const Section1 = () => {
    return (
      <section className="container mx-auto py-12 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="mt-4 text-gray-700">
              We strive to deliver creative designs that inspire and attract clients globally.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="/images/vision.jpg" alt="Vision" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    );
  };
  
  export default Section1;