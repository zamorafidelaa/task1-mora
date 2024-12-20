import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#6C4E31] text-white shadow-md p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-[#FFDBB5] transition-all duration-300">
          Zamora Clothes
        </h1>
        <nav className="mt-4">
          <ul className="flex space-x-12 text-xl">
            <li className="text-white hover:text-[#FFDBB5] transition-all duration-300 transform hover:scale-110">
              <Link to="/">Home</Link>
            </li>
            <li className="text-white hover:text-[#FFDBB5] transition-all duration-300 transform hover:scale-110">
              <Link to="/about">About</Link>
            </li>
            <li className="text-white hover:text-[#FFDBB5] transition-all duration-300 transform hover:scale-110">
              <Link to="/clothes">Clothes</Link>
            </li>
            <li className="text-white hover:text-[#FFDBB5] transition-all duration-300 transform hover:scale-110">
              <Link to="/contactUs">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
