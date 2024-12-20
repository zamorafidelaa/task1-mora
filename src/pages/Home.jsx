const Home = () => {
  return (
    <div className="relative bg-black h-screen w-full">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="video.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex justify-center items-center h-full text-center">
        <div>
          <h1 className="text-7xl font-bold text-[#DAC0A3] mb-4">Welcome to Zamora Clothes</h1>
          <p className="text-lg text-[#DAC0A3] max-w-2xl mx-auto">
            Explore our curated collection of vintage-inspired clothing. Whether you’re looking for something chic or casual, we’ve got timeless styles that capture the essence of the past while staying relevant today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
