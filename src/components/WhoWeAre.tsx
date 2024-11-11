import { Helmet } from "react-helmet-async";

export const WhoWeAre = () => {
  return (
    <section id="who-we-are" className="py-12 px-6 md:px-12 bg-white">
      <Helmet>
        <title>Who We Are | WoodCrafts Co.</title>
        <meta
          name="description"
          content="Meet the artisans and woodworkers behind WoodCrafts Co. who bring passion and expertise to handcrafted wooden products."
        />
        <meta
          name="keywords"
          content="WoodCrafts team, artisans, woodworkers, craftsmanship, handcrafted products"
        />
        <link rel="canonical" href="https://www.yoursite.com/who-we-are" />
      </Helmet>

      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Who We Are
        </h2>
        <p className="text-lg leading-relaxed text-gray-700">
          We are a team of passionate artisans, designers, and woodworkers
          dedicated to bringing the natural beauty of wood into your home. With
          years of experience and a love for craftsmanship, our goal is to
          create pieces that are not only functional but also artistic
          expressions of nature’s finest materials.
        </p>
      </div>
    </section>
  );
};
