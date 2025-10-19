import Logo from "/trans_bg.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import UserModal from "../modal/UserModal";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="shadow sticky z-50 top-0">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                className="h-[10em] p-[1.5em] transition-[filter] duration-300 will-change-[filter] hover:drop-shadow-[0_0_2em_#646cffaa]"
                src={Logo}
                alt="PostsApp Logo"
              />
            </Link>

            {/* Profile image */}
            <div
              className="flex items-center lg:order-2"
              onClick={() => setIsModalOpen(true)}
            >
              <img
                className="w-16 h-16 rounded-full mx-auto cursor-pointer"
                src="/IMG_0329.JPG"
                alt="User profile"
              />
            </div>

            {/* Nav Links */}
            <div
              className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 
                      ${isActive ? "text-blue-950" : "text-gray-700"} 
                      border-b border-gray-100 hover:bg-gray-50 
                      lg:hover:bg-transparent lg:border-0 
                      hover:text-blue-950 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/posts"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 
                      ${isActive ? "text-blue-950" : "text-gray-700"} 
                      border-b border-gray-100 hover:bg-gray-50 
                      lg:hover:bg-transparent lg:border-0 
                      hover:text-blue-950 lg:p-0`
                    }
                  >
                    Posts
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 
                      ${isActive ? "text-blue-950" : "text-gray-700"} 
                      border-b border-gray-100 hover:bg-gray-50 
                      lg:hover:bg-transparent lg:border-0 
                      hover:text-blue-950 lg:p-0`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Modal */}
      {isModalOpen && (
      <UserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>   
          {/* Close Button */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-white-900 transition cursor-pointer"
          > Close 
          </button>

          {/* Cover Image */}
          <div className="h-32 overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max"
              alt="Cover"
            />
          </div>

          {/* Profile Picture */}
          <div className="w-32 h-32 mx-auto relative -mt-16 border-4 border-white rounded-full overflow-hidden shadow-lg">
            <img
              className="object-cover w-full h-full"
              src="/IMG_0329.JPG"
              alt="User"
            />
          </div>

          {/* Name and Title */}
          <div className="text-center mt-4 px-6">
            <h2 className="text-xl font-bold text-gray-900">Hari Bahadur</h2>
            <p className="text-gray-500 mt-1">React Developer</p>
          </div>

          {/* Stats */}
          <ul className="flex justify-around mt-6 text-gray-700 border-t border-b py-4">
            <li className="flex flex-col items-center">
              <span className="text-blue-600 font-semibold">2k</span>
              <span className="text-sm text-gray-500">Reviews</span>
            </li>
            <li className="flex flex-col items-center">
              <span className="text-blue-600 font-semibold">10k</span>
              <span className="text-sm text-gray-500">Followers</span>
            </li>
            <li className="flex flex-col items-center">
              <span className="text-blue-600 font-semibold">15</span>
              <span className="text-sm text-gray-500">Projects</span>
            </li>
          </ul>

        </UserModal>
      )}

    </>
  );
}

export default Header;
