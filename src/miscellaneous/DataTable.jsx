import React from "react";

const DataTable = ({ data, selectedData, handleCheckboxChange, columns }) => {
  return (
    <div className="overflow-x-scroll no-scroll">
      <table className="min-w-full bg-white border border-slate-100 rounded-md text-slate-800">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className={`py-2 px-4 border-b ${
                  column.label.includes("Name") && "text-start"
                } `}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((item, rowIndex) => (
            <tr
              key={item._id || rowIndex} // Use item._id if available, else use rowIndex
              className={`${
                rowIndex % 2 === 0 ? "bg-slate-200" : "bg-slate-100"
              } font-semibold `}
            >
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`py-2 px-4 border-b ${
                    column.field === "picture"
                      ? "flex justify-center items-center"
                      : column.field === "fullname"
                      ? "text-start"
                      : "text-center"
                  }`}
                >
                  {column.label === "Select" ? (
                    <input
                      type="checkbox"
                      className="cursor-pointer"
                      checked={selectedData === item._id}
                      onChange={() => handleCheckboxChange(item._id)}
                    />
                  ) : column.field === "picture" ? (
                    <img
                      src={item[column.field]}
                      alt={item[column.label]}
                      className="w-[45px] h-[45px]  rounded-full object-cover"
                    />
                  ) : (
                    item[column.field]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
