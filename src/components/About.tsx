import { Helmet } from "react-helmet-async";

export const About = () => {
  return (
    <section id="about" className="py-12 px-6 md:px-12 bg-white">
      <Helmet>
        <title>About Us | WoodCrafts Co.</title>
        <meta
          name="description"
          content="Learn about WoodCrafts Co., our commitment to quality craftsmanship, sustainability, and the story behind our handcrafted wooden items."
        />
        <meta
          name="keywords"
          content="about WoodCrafts, handcrafted wood, sustainable craftsmanship, wooden products"
        />
        <link rel="canonical" href="http://4.188.76.210/about" />
      </Helmet>

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
