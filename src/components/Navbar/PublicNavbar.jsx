import { Disclosure } from "@headlessui/react";
import { SiAuthy } from "react-icons/si";
import { RiLoginCircleLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import logo_plant from "../../assets/plant_logo.png"

export default function PublicNavbar() {
  return (
    <>
      {/* Add a style tag to import the font */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
        `}
      </style>
      <Disclosure as="nav" className="bg-[#022C22] shadow">
        {({ open }) => (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between items-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <div className="flex flex-shrink-0 items-center">
                {/* Logo */}
                <SiAuthy className="h-8 w-auto text-green-500" />
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `inline-flex items-center px-3 py-2 font-semibold text-xl ${isActive ? 'text-white' : 'text-white'
                    }`
                  }
                >
                  GlobalHe
                  <img
                    src={logo_plant} 
                    alt="Logo R"
                    className="inline-block h-6 w-6 mx-1"
                  />
                  b
                </NavLink>
              </div>

              <div className="hidden md:flex md:space-x-8">
                <div className="flex space-x-8 mx-auto">
                  {/* Centered Links */}
                  <NavLink
                    to="/home"
                    className={({ isActive }) =>
                      `inline-flex items-center px-3 py-2 text-sm font-normal ${isActive ? 'bg-white text-[#022C22] border rounded-full' : 'text-white hover:bg-white hover:text-[#012b00] hover:border-white hover:rounded-full'
                      }`
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/search"
                    className={({ isActive }) =>
                      `inline-flex items-center px-3 py-2 text-sm font-normal ${isActive ? 'bg-white text-[#022C22] border rounded-full' : 'text-white hover:bg-white hover:text-[#012b00] hover:border-white hover:rounded-full'
                      }`
                    }
                  >
                    Search
                  </NavLink>
                  <NavLink
                    to="/explore"
                    className={({ isActive }) =>
                      `inline-flex items-center px-3 py-2 text-sm font-normal ${isActive ? 'bg-white text-[#022C22] border rounded-full' : 'text-white hover:bg-white hover:text-[#012b00] hover:border-white hover:rounded-full'
                      }`
                    }
                  >
                    Explore
                  </NavLink>
                  <NavLink
                    to="/about-us"
                    className={({ isActive }) =>
                      `inline-flex items-center px-3 py-2 text-sm font-normal ${isActive ? 'bg-white text-[#022C22] border rounded-full' : 'text-white hover:bg-white hover:text-[#012b00] hover:border-white hover:rounded-full'
                      }`
                    }
                  >
                    About Us
                  </NavLink>
                </div>
              </div>

              <div className="flex-shrink-0">
                <NavLink
                  to="/getInTouch"
                  className={({ isActive }) =>
                    `relative ml-2 inline-flex items-center gap-x-1.5 rounded-[4rem] border ${isActive
                      ? 'bg-green-600 text-white border-green-600'
                      : 'border-white text-white hover:bg-green-600 hover:text-white hover:border-green-600'
                    } px-3 py-2 text-sm font-semibold`
                  }
                >
                  <RiLoginCircleLine
                    className="-ml-0.5 h-5 w-5"
                    aria-hidden="true"
                  />
                  Login
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </Disclosure>
    </>
  );
}
