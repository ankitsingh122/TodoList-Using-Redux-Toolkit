import React from "react";

import { fakeuser } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../Store/Slices/UserSlice";
import List from "./List";
import Delete from "./Delete";



const User = () => {
  const Dispatch = useDispatch();

  const Adduser = (name) => {
    Dispatch(addUser(name));
  };

  return (
    <>
      <div>
        <div className="content">
          <div className="">
            <div className="text-4xl flex justify-center mt-20 font-mono">
              List of User Details
            </div>
            <div className=" flex justify-end">
              <div className=" mx-96  bg-purple-500 w-max rounded-lg px-3 py-2 text-white">
                <button onClick={() => Adduser(fakeuser())}>Add +</button>
              </div>
            </div>
          </div>

          <List />
          <div className="mx-96 mt-10">
            <hr />
          </div>
          <div className="mt-10">
            <Delete />
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
