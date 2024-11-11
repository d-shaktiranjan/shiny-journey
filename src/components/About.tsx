export const About = () => {
  document.title = "WoodCrafts Co. | About Page";
  return (
    <section id="about" className="py-12 px-6 md:px-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          WoodCrafts Co. specializes in creating beautiful, sustainable wooden
          items. Our handcrafted products are made with care, blending tradition
          with modern design. We are committed to using high-quality materials
          and promoting eco-friendly practices.
        </p>
      </div>
    </section>
  );
};
