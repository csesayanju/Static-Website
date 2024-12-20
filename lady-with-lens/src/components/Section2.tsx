const Section2 = () => {
    return (
      <section className="bg-gray-100 py-12 px-4 md:px-8">
        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold">Portfolio</h2>
            <p className="mt-4 text-gray-700">
              Explore our projects showcasing the best of our graphic designing skills.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src="/images/portfolio.jpg" alt="Portfolio" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    );
  };
  
  export default Section2;
  