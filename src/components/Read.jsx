import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showUser } from "../features/userDetailSlice";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { deleteUser, getUser } from "../features/userDetailSlice";

function Read() {
  const dispatch = useDispatch();

  const { users, loading, isDelete } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, [isDelete]);

  if (loading && users.length === 2) {
    return (
      <div className={"container grid grid-cols-2 gap-5 mb-2 pt-24"}>
        <Loader />
        <Loader />
      </div>
    );
  } else if (loading && users.length === 1) {
    return (
      <div className={"container grid grid-cols-2 gap-5 mb-2 pt-24"}>
        <Loader />
      </div>
    );
  } else if (loading && users.length === 3) {
    return (
      <div className={"container grid grid-cols-2 gap-5 mb-2 pt-24"}>
        <Loader />
        <Loader />
        <Loader />
      </div>
    );
  } else if (loading && users.length === 4) {
    return (
      <div className={"container grid grid-cols-2 gap-5 mb-2 pt-24"}>
        <Loader />
        <Loader />
        <Loader />
        <Loader />
      </div>
    );
  } else if (loading && users.length === 5) {
    return (
      <div className={"container grid grid-cols-2 gap-5 mb-2 pt-24"}>
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
      </div>
    );
  } else if (loading && users.length === 6) {
    return (
      <div className={"container grid grid-cols-2 gap-5 mb-2 pt-24"}>
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
      </div>
    );
  }
  return (
    <div className={"container"}>
      <h2 className={"text-center my-4 text-gray-500 font-bold text-2xl"}>
        All data
      </h2>
      <h2
        className={`${
          users.length === 0 ? "visible" : "hidden"
        } text-center text-[24px] text-gray-900 font-bold`}
      >
        Здесь пока ничего нет
      </h2>

      <div className={"container grid grid-cols-2 gap-5"}>
        {users.map((user) => (
          <div
            key={user.id}
            className="max-w-md w-full p-2 mx-2 my-4 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="px-4 py-2">
              <h2 className="font-bold text-xl mb-2 text-gray-500">
                {user.firstName}_{user.lastName}
              </h2>
              <p className="text-gray-700 text-base">{user.email}</p>
            </div>
            <div className="px-4 py-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {user.number}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {user.age}
              </span>
            </div>
            <div
              className={"px-5 text-gray-100 flex gap-5 items-center mt-3 pb-3"}
            >
              <Link to={`/update/${user.id}`}>
                <button className={" rounded-full px-4 py-1 bg-green-400"}>
                  edit
                </button>
              </Link>

              <Link onClick={() => dispatch(deleteUser(user.id))}>
                <button className={" rounded-full px-4 py-1 bg-red-400"}>
                  delete
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Read;
