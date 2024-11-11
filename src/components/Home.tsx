export const Home = () => {
  document.title = "WoodCrafts Co. | Handcrafted Wooden Art & Essentials";
  return (
    <section
      id="home"
      className="bg-gray-100 h-[85vh] flex items-center justify-center"
    >
      <div className="text-center text-gray-800">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Handcrafted Wooden Art
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Bringing natural elegance to your everyday life.
        </p>
        <button className="bg-gray-800 text-white hover:bg-gray-700 py-2 px-6 rounded">
          Shop Now
        </button>
      </div>
    </section>
  );
};
