const About = () => {
  return (
    <div className="bg-white py-20 max-h-screen">
      <div className="max-w-5xl mx-auto text-center text-gray-800">
        <div className="bg-[#DAC0A3] p-8 rounded-3xl shadow-lg border border-[#74512D]">
          <h1 className="text-4xl font-bold text-[#74512D] mb-6">About Us</h1>
          <p className="text-lg mb-6">
            Welcome to <strong>Zamora Clothes</strong>, a gallery showcasing a curated collection of vintage-inspired clothing. Our platform is designed to celebrate the beauty and charm of timeless fashion by presenting a variety of clothes that reflect the style of the past while remaining relevant today.
          </p>
          <h2 className="text-2xl font-semibold text-[#74512D] mb-4">Our Purpose</h2>
          <p className="text-gray-700 mb-6">
            At Zamora Clothes, we aim to provide a visual experience for vintage clothing enthusiasts. Our collection is not for sale but serves as a gallery where you can explore various styles and discover clothing pieces that have a unique and nostalgic appeal.
          </p>
          <h2 className="text-2xl font-semibold text-[#74512D] mb-4">Our Collection</h2>
          <p className="text-gray-700 mb-6">
            From retro dresses to classic outerwear, our gallery features clothing designs that pay homage to the past. Whether you’re looking for a chic vintage look or something casual, our collection offers a glimpse into timeless fashion trends.
          </p>
          <h2 className="text-2xl font-semibold text-[#74512D] mb-4">Our Promise</h2>
          <p className="text-gray-700 mb-6">
            We believe in presenting high-quality, eco-friendly, and ethically inspired fashion in a way that respects both the environment and the beauty of vintage clothing. Our platform promotes sustainable style, and we are proud to feature a collection that tells the story of vintage fashion.
          </p>
          <h2 className="text-2xl font-semibold text-[#74512D] mb-4">Contact Us</h2>
          <p className="text-gray-700">
            Have questions or want to learn more about a piece from our gallery? Feel free to reach out to us at{" "}
            <a href="mailto:morafidela1@gmail.com" className="text-[#74512D] underline">
              morafidela1@gmail.com
            </a>
            . We're happy to share more details about the clothing showcased!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
