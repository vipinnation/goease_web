import { Link } from "react-router";
import Logo from "@/assets/logo.png";

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">GoEase</span>
              <img
                className="h-8 w-auto sm:h-10"
                src={Logo}
                alt="GoEase Logo"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link
              to="#how-it-works"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              How It Works
            </Link>
            <Link
              to="#benefits"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Benefits
            </Link>
            <Link
              to="#testimonials"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Testimonials
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0"></div>
        </div>
      </div>
    </header>
  );
}
