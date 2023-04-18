import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar(props) {
  const { users } = useSelector((state) => state.app);
  return (
    <nav className={" bg-gray-500"}>
      <ul className={"container px-4 py-5 flex justify-between items-center"}>
        <li>
          <ul className={"flex gap-8"}>
            <Link to={"/"}>
              <li className={"text-gray-200"}>Create Post</li>
            </Link>
            <Link to={"/read"}>
              <li className={"text-gray-200"}>
                All Posts
                <span
                  className={`ml-2 ${
                    users.length === 0 ? "hidden" : "visible"
                  }`}
                >
                  ({users.length})
                </span>
              </li>
            </Link>
          </ul>
        </li>
        <li>
          {/*<input*/}
          {/*  className={*/}
          {/*    "border px-4 py-2 outline-none rounded-lg text-gray-800 bg-gray-300"*/}
          {/*  }*/}
          {/*  placeholder={"search..."}*/}
          {/*/>*/}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
