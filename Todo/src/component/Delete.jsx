import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../Store/Slices/UserSlice";
import { fakeuser } from "../api";

function Delete() {
  const Dispatch = useDispatch();

  const DeleteUser = (name) => {
    Dispatch(deleteUser(name));
  };
  return (
    <>
      <div className="flex justify-end">
        <button
          className="mx-96 bg-purple-500 hover:bg-violet-700 w-max rounded-lg px-3 py-2 text-white"
          onClick={() => {
            DeleteUser(fakeuser);
          }}
        >
          Remove
        </button>
      </div>
    </>
  );
}

export default Delete;
