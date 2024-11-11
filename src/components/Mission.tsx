import { Helmet } from "react-helmet-async";

export const Mission = () => {
  return (
    <section id="mission" className="py-12 px-6 md:px-12 bg-gray-50">
      <Helmet>
        <title>Our Mission | WoodCrafts Co.</title>
        <meta
          name="description"
          content="Discover the mission of WoodCrafts Co.: creating sustainable, eco-friendly wooden items that bring nature into your home."
        />
        <meta
          name="keywords"
          content="WoodCrafts mission, sustainable products, eco-friendly wooden items, craftsmanship"
        />
        <link rel="canonical" href="https://www.yoursite.com/mission" />
      </Helmet>

      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Our Mission
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          At WoodCrafts Co., our mission is to provide eco-friendly, sustainable
          products that combine functionality with artistry. We believe that
          small, well-crafted items can have a big impact on daily life and help
          connect people to nature.
        </p>
      </div>
    </section>
  );
};
