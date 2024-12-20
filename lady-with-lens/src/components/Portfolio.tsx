const Portfolio = () => (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {["design1.jpg", "design2.jpg", "design3.jpg"].map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md">
              <img src={`/${image}`} alt={`Design ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Portfolio;
  