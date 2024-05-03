import React from "react";
import { useSelector } from "react-redux";

function List() {
  const data = useSelector((state) => {
    return state.users;
  });

  return (
    <>
      <div className="mt-20">
        {data.map((user, id) => {
          return (
            <div
              className=" py-2 text-center text-2xl rounded-3xl bg-gray-300 mx-96 mt-2 font-mono "
              key={id}
            >
              {user}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default List;
