import { useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function NavbarComponent() {
  const [navbarList, setNavbarList] = useState([
    {
      title: "Home",
      url: "/",
      active: true
    },
    {
      title: "Products",
      url: "/products",
      active: false
    },

    {
      title: "About Us",
      url: "/about-us",
      active: false
    },
    {
      title: "Service",
      url: "/service",
      active: false
    }
  ]);

  // get data from store
  const total = useSelector((state) => state.cart.total);

  const handleClick = (list) => {
    // console.log(list);
    // setNavbarList((preValue) => console.log(preValue));
    setNavbarList((preValue) => {
      // console.log(preValue);
      return preValue.map((item) => {
        if (item.title === list.title) {
          return {
            ...item,
            active: true
          };
        } else {
          return {
            ...item,
            active: false
          };
        }
      });
    });
  };
  return (
    <header className="bg-gray-300">
      <Navbar fluid rounded className="bg-gray-300 max-w-screen-xl mx-auto">
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {navbarList.map((list, index) => {
            return (
              <Navbar.Link
                key={index}
                as={Link}
                to={list.url}
                active={list.active}
                onClick={() => handleClick(list)}
              >
                {list.title}
              </Navbar.Link>
            );
          })}
          <Navbar.Link as={Link} to={"/cart"}>
            <div className="relative">
              <span className="absolute bg-red-200 px-2 py-1 rounded-full -top-4 -right-6">
                {total}
              </span>
              <FaCartArrowDown className="text-[18px]" />
            </div>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <h2 className="m-8">{name}</h2>
      {/* <div>
        <form action="#">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            id="name"
            type="text"
            className="m-8"
          />
          <label htmlFor="password">Password</label>
          <input
            onChange={handleInputPassword}
            type="password"
            id="password"
            className="m-8"
          />
          <p className="text-red-700">{error.message}</p>
        </form>
      </div> */}
    </header>
  );
}
