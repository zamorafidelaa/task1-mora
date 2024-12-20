const ContactUs = () => {
  return (
    <div className="p-6 mt-10 mb-32">
      <h1 className="text-4xl font-bold text-center text-[#6C4E31] mb-16">
        Contact Us
      </h1>
      <div className="max-w-2xl mx-auto bg-[#EADBC8] shadow-2xl rounded-xl p-8 text-center">
        <img
          src="image.png"
          alt="Mora Fidela"
          className="w-36 h-36 object-cover rounded-full mx-auto mb-6 border-4 border-[#6C4E31] transition-transform transform hover:scale-105"
        />
        <p className="text-lg text-[#543310] mb-4 font-semibold">Full Name: <span className="font-normal">Mora Fidela</span></p>
        <p className="text-lg text-[#543310] mb-4 font-semibold">Date of Birth: <span className="font-normal">17 April 2004</span></p>
        <p className="text-lg text-[#543310] mb-4 font-semibold">
          Faculty: <span className="font-normal">Faculty of Computer Science</span>
        </p>
        <p className="text-lg text-[#543310] mb-4 font-semibold">
          Major: <span className="font-normal">Informatic Management</span>
        </p>
        <p className="text-lg text-[#543310] mb-6 font-semibold">
          Hobby: <span className="font-normal">Travelling, listening to music, and watching movies</span>
        </p>
        <a
          href="mailto:morafidela1@egmail.com"
          className="inline-block bg-[#6C4E31] text-white py-2 px-6 rounded-lg hover:bg-[#543310] transition duration-300"
        >
          Send an Email
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
