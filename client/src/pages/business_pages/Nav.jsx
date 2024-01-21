// import "./nav.css";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";

import { useState } from "react";
import { NavLink } from "react-router-dom";
// import User from "./User";
import { useSelector } from "react-redux";
import User from "../../components/Navbar/User";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    "Home",
    "About",
    "Contact"
  ];

  const loggedIn = useSelector((state) => state.registeredUser.user);
  console.log("Active", loggedIn);

  const solutions = [
    {
      name: "Protein",
      description: "Get a better understanding of your traffic",
      href: "#",
      icon: ChartPieIcon,
    },
    {
      name: "CREATINE",
      description: "Speak directly to your customers",
      href: "#",
      icon: CursorArrowRaysIcon,
    },
    {
      name: "Multivitamins Products ",
      description: "Your customers' data will be safe and secure",
      href: "#",
      icon: FingerPrintIcon,
    },
    {
      name: "Protein Bar",
      description: "Connect with third-party tools",
      href: "#",
      icon: SquaresPlusIcon,
    },
    {
      name: "Energy Drink",
      description: "Build strategic funnels that will convert",
      href: "#",
      icon: ArrowPathIcon,
    },
  ];
  const callsToAction = [
    { name: "Watch demo", to: "/products", icon: PlayCircleIcon },
    { name: "Contact", to: "/contact", icon: PhoneIcon },
  ];

  const items=useSelector((state)=>state.cartStore.items);


  return (
    
    <>
      <div className=" bg-slate-900 text-slate-200 text-center p-1 max-sm:hidden">
        <p>
          Get free delivery on orders over{" "}
          <span className=" text-white font-bold">$200</span>{" "}
        </p>
      </div>

      <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[#f2cb1f]">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden "
          />
          <NavbarBrand>
            <Link
              color="foreground"
              className="navbar-brand text-xl mx-5 fs-3  font-semibold"
              to="/"
            >
              Muscle Sharks
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="start">
          <NavbarItem>
            <NavLink to="/">Home</NavLink>
          </NavbarItem>
          {/* <NavbarItem >
          <Link href="#" color='foreground'>
            Shop
          </Link>
        </NavbarItem> */}
          <Popover className="relative">
            <Popover.Button className="inline-flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              <span>Shop</span>
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {solutions.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                      >
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div>
                          <a
                            href={item.href}
                            className="font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <Link
                        key={item.name}
                        href={item.to}
                        className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <NavbarItem>
            <NavLink to="/about">About</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="/contact">Contact</NavLink>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            {loggedIn ? <User /> : <NavLink to={"/signin"}>Log In</NavLink>}
          </NavbarItem>

          {/* <NavbarItem className="hidden lg:flex">
          <a className="nav-link" href="#">
                      <i className="fa-regular fa-heart"></i>
                    </a>    </NavbarItem> */}

          {loggedIn && (
          <NavbarItem>
            <NavLink className="nav-link ml-4 text-2xl" to="/cart">
              <div className="flex justify-center items-center">
                <div className="relative left-4 bottom-6">
                  <div className="absolute  left-3">
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                      {items.length}
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="file mt-4 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
              </div>
            </NavLink>
          </NavbarItem>
        )}

        </NavbarContent>
        <NavbarMenu className="bg-[#f2cb1f]">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NavLink
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full"
                to={
                  index === 0
                    ? "/"
                    : index === 1
                    ? "/about"
                    : index === 2
                    ? "/contact"
                    : "#"
                }
                size="lg"
              >
                {item}
              </NavLink>
            </NavbarMenuItem>
          ))}

        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default Nav;