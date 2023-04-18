import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../features/userDetailSlice";
import Loader from "./Loader";
import { useDispatch, useSelector } from "react-redux";

function SinglePage() {
  const [user, setUser] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(BASE_URL + "/" + params.id)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.app);

  if (loading) {
    return (
      <div className={"container grid grid-cols-2 gap-5 mb-2"}>
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <h1>
        {user.firstName} {user.lastName}
      </h1>
    </div>
  );
}

export default SinglePage;
