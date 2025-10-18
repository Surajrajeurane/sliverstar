import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Who We Are
          </h2>
          <div className="prose prose-lg text-slate-600 max-w-none">
            <p>
              Silverstar India was founded by a team of digital advertising veterans who saw a common struggle among website owners: the complex and often frustrating process of getting approved for Google AdX. We believe that every high-quality publisher deserves access to premium ad demand to maximize their revenue.
            </p>
            <p>
              Our mission is simple: to provide a fast, transparent, and reliable pathway to AdX approval. We leverage our industry expertise and established partnerships to navigate the requirements on your behalf, so you can focus on what you do best—creating great content. We're dedicated to empowering publishers in India and beyond to achieve their monetization goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
