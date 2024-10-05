import { useState } from "react";
const Header = () => {
  const [event, setevent] = useState(false);
  const toggleMenu = () => {
    setevent(!event);
  };
  return (
    <div className="text-secondary w-4/5 mx-auto  flex  justify-between items-center  ">
      <button
        onClick={toggleMenu}
        className="block md:hidden mt-6 rounded-full bg-[#252529] p-2 border-2 border-border hover:border-yellow-700 active:scale-90"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          fill="#fff"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M4 7h3m13 0h-9M20 17h-3M4 17h9M4 12h16"
          ></path>
        </svg>
      </button>
      <div
        className={` ${
          event ? "fixed" : "hidden"
        }  w-4/5 inset-0  mx-auto mt-2 p-5 bg-[#18181bfd] text-secondary font-light gap-5 rounded-3xl z-10 h-96`}
      >
        <div className="flex justify-between items-center ">
          <h1 className="text-sm">Navigation</h1>
          <button
            className="origin-center hover:rotate-45 font-extrabold text-xl active:scale-90"
            onClick={toggleMenu}
          >
            <svg
              className="hover:fill-yellow-700 "
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              fill="#fff"
              data-name="Layer 1"
              viewBox="0 0 200 200"
            >
              <path d="M114 100l49-49a9.9 9.9 0 00-14-14l-49 49-49-49a9.9 9.9 0 00-14 14l49 49-49 49a9.9 9.9 0 0014 14l49-49 49 49a9.9 9.9 0 0014-14z"></path>
            </svg>
          </button>
        </div>
        <ul className="flex flex-col gap-3">
          <li className=" border1 ">
            <a className="hover-effect" href="">
              About
            </a>
          </li>
          <li className="border1 ">
            <a className="hover-effect" href="">
              Articles
            </a>
          </li>
          <li className="border1 ">
            <a className="hover-effect" href="#main">
              Projects
            </a>
          </li>
          <li className="border1 ">
            <a className="hover-effect" href="">
              Speaking
            </a>
          </li>
          <li className="pt-1">
            <a className="hover-effect" href="">
              Uses
            </a>
          </li>
        </ul>
      </div>
      <div></div>
      <nav className="hidden md:block md mt-6">
        <ul className="center gap-4 rounded-2xl bg-accent text-[#ffffff] p-3 font-light px-9">
          <li>
            <a className="hover-effect" href="">
              About
            </a>
          </li>
          <li>
            <a className="hover-effect" href="">
              Articles
            </a>
          </li>
          <li>
            <a className="hover-effect" href="">
              Projects
            </a>
          </li>
          <li>
            <a className="hover-effect" href="">
              Speaking
            </a>
          </li>
          <li>
            <a className="hover-effect" href="">
              Uses
            </a>
          </li>
        </ul>
      </nav>
      <button className="mt-6 rounded-full bg-[#252529] p-2 border-2 border-border hover:border-yellow-700 active:scale-90">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            d="M21.067 11.857l-.642-.388.642.388zm-8.924-8.924l-.388-.642.388.642zM21.25 12A9.25 9.25 0 0112 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75h-1.5zM12 21.25A9.25 9.25 0 012.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75v-1.5zM2.75 12A9.25 9.25 0 0112 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12h1.5zm12.75 2.25A5.75 5.75 0 019.75 8.5h-1.5a7.25 7.25 0 007.25 7.25v-1.5zm4.925-2.781A5.746 5.746 0 0115.5 14.25v1.5a7.247 7.247 0 006.21-3.505l-1.285-.776zM9.75 8.5a5.747 5.747 0 012.781-4.925l-.776-1.284A7.246 7.246 0 008.25 8.5h1.5zM12 2.75a.384.384 0 01-.268-.118.285.285 0 01-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299-.062-.455-.42-1.026-1.137-1.026v1.5zm9.71 9.495c-.066.107-.156.109-.187.105a.285.285 0 01-.155-.082.384.384 0 01-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137-.438-.059-.995.103-1.299.606l1.284.776z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Header;
