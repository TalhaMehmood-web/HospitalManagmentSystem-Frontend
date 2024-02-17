import React from "react";

const DetailComponent = ({ doctorData, bioFields }) => {
  return (
    <div
      style={{
        height: "100%",
        display: "grid",
        gridTemplateRows: `repeat(${bioFields.length}, 1fr)`,
      }}
    >
      {bioFields?.map((item, index) => (
        <div
          className={`grid grid-cols-3  justify-center items-center  border border-slate-200 ${
            index % 2 === 0 ? "bg-white" : ""
          } `}
          key={index}
        >
          <p className="px-3 border-r text-base font-semibold border-r-slate-600/50">
            {item.label}
          </p>
          <p className="col-span-2 px-3">
            {doctorData && doctorData[item?.name]}{" "}
            {item?.name === "experience" && "Years"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DetailComponent;
