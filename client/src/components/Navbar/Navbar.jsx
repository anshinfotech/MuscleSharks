import "./nav.css";

import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarMenu,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
} from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCart } from "../redux/action/cartAction";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../redux/action/userAction";

export default function NavbarComp() {
  const loggedIn = useSelector((state) => state.registeredUser.user);
  console.log("Active", loggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCart());
  }, [dispatch]);
  const items = useSelector((state) => state.cartStore.items);
  const navigate = useNavigate();

  return (
    <>
      <Navbar className="bg-[#f2cb1f]" shouldHideOnScroll>
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="start">
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

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarBrand>
            <Link
              color="foreground"
              className="navbar-brand text-xl mx-5 fs-3  font-semibold"
              to="/"
            >
              MuscleSharks
            </Link>
          </NavbarBrand>
          <NavbarItem>
            <NavLink to="/">Home</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="/about">About</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="/contact">Contact</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="/blogpage">Blogs</NavLink>
          </NavbarItem>
          <NavbarItem>
            <NavLink to="/products">Products</NavLink>
          </NavbarItem>
        </NavbarContent>
        {!loggedIn ? (
          <>
            <NavbarContent justify="end">
              <NavbarItem>
                <NavLink to="/signin">Login</NavLink>
              </NavbarItem>
              <NavbarItem className="signup">
                <NavLink to="/signup">Sign Up</NavLink>
              </NavbarItem>
            </NavbarContent>
          </>
        ) : (
          <>
            <NavbarContent as="div" justify="end">
              <NavbarItem>
                <div className="flex justify-center items-center mt-8 -ml-14">
                  <div className="relative left-4 bottom-6">
                    <div className="absolute  left-3">
                      <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                        {items.length}
                      </p>
                    </div>
                    <NavLink to="/cart">
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
                    </NavLink>
                  </div>
                </div>
              </NavbarItem>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform border-black"
                    color="black"
                    name={loggedIn.name}
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{loggedIn.email}</p>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/account">Account</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/user-orders">My Orders</NavLink>
                  </DropdownItem>
                  <DropdownItem color="danger">
                    <p onClick={() => dispatch(logout(navigate))}>Logout</p>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarContent>
          </>
        )}

        <NavbarMenu>
          <NavbarMenuItem>
            <NavLink to="/">Home</NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavLink to="/about">About</NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavLink to="/contact">Contact</NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavLink to="/blogpage">Blogs</NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <NavLink to="/products">Products</NavLink>
          </NavbarMenuItem>
          {!loggedIn ? (
            <>
              <NavbarMenuItem>
                <NavLink to="/signup">Sign Up</NavLink>
              </NavbarMenuItem>
            </>
          ) : null}
        </NavbarMenu>
      </Navbar>
      <div className="lg:block md:block hidden sm:hidden max-sm:hidden icons lg:p-5 bg-slate-50">
        <div className="lg:text-lg md:text-sm flex text-xl justify-between">
          <div className="flex items-center">
            <i className="fa-regular fa-credit-card"></i>
            <p>Low price guarantee</p>
          </div>
          <div className="flex items-center">
            <i className="fa-solid fa-rotate-left"></i>
            <p>30 day online returns</p>
          </div>
          <div className="flex items-center">
            <i className="fa-solid fa-truck"></i>
            <p>Free delivery on Bulk Orders</p>
          </div>
          <div className="flex items-center">
            <i className="fa-solid fa-phone"></i>
            <p>
              Ask our experts on our Toll Free No.:{" "}
              <span className="text-red-600">1800-889-8177</span>
            </p>
          </div>
          <div className="flex items-center">
            <a href="https://www.instagram.com/musclesharks07/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.instagram.com/musclesharks07/">
            <p>Follow us on Instagram</p></a>
          </div>
        </div>
      </div>
    </>
  );
}
