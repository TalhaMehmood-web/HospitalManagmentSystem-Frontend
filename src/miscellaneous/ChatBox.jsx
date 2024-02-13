import { React, useState } from "react";
import { useQueryClient } from "react-query";
const ChatBox = () => {
  const [expand, setExpand] = useState(false);
  const [mouseEntered, setMouseEntered] = useState(null);
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("all-doctors");

  const handleExpand = () => {
    setExpand((prev) => !prev);
  };
  return (
    <div
      className={`w-[20rem] ${
        expand ? "h-[35rem]  " : "h-[3rem]"
      } shadow-3xl overflow-y-scroll scroll shadow-slate-800 bg-slate-50 text-slate-700 rounded-t-lg fixed bottom-0 right-2 py-2 transition-all duration-300 ease-in-out border border-slate-200 `}
    >
      <div
        className={`flex justify-between px-3  ${
          expand && "py-2 border-b border-slate-200"
        }`}
      >
        <p className="text-lg  font-semibold">Messaging</p>
        <button
          onClick={handleExpand}
          className="hover:bg-slate-300 border border-transparent rounded-full hover:border hover:border-slate-200 "
        >
          <i
            className={` text-lg font-semibold cursor-pointer  px-[7px]    py-[0.9px]  fa-solid  ${
              expand ? "fa-angle-down" : "fa-angle-up"
            }`}
          ></i>
        </button>
      </div>
      <div>
        {expand &&
          data?.data?.map((item, index) => (
            <div
              onMouseEnter={() => setMouseEntered(item._id)}
              onMouseLeave={() => setMouseEntered(null)}
              key={item._id}
              className={`flex cursor-pointer ${
                index % 2 === 0 ? "bg-slate-200/50" : "bg-slate-100/50"
              }   py-2 px-2 border-b border-slate-200 `}
            >
              <img
                className="w-[50px] mr-5 h-[50px] rounded-full object-cover "
                src={`${item.picture}`}
                alt="img"
              />
              <div className="flex-1 text-sm flex justify-between">
                <p className="">{item.fullname}</p>
                <p>{mouseEntered === item._id ? "..." : "4:14 am"}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChatBox;
