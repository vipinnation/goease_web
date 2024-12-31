import { Link } from "react-router";

const FooterComponent = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-2">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: goeaseofficial2024@gmail.com</p>
            <p>Phone: 8794375190</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400">
                Facebook
              </a>
              <a href="#" className="hover:text-green-400">
                Twitter
              </a>
              <a href="#" className="hover:text-green-400">
                Instagram
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/delete" className="hover:text-green-400">
                  Request to Delete Account
                </Link>
              </li>
              <li>
                <Link to="/policy" className="hover:text-green-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/policy" className="hover:text-green-400">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest offers and news</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded text-gray-800"
            />
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 GoEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
