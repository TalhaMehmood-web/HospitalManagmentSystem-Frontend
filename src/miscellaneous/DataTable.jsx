import React from "react";

const DataTable = ({
  data,
  selectedData,
  handleCheckboxChange,
  columns,
  title,
  limit,
  setLimit,
  search,
  setSearch,
  handleEdit,
  handleDelete,
  handleDetail,
}) => {
  return (
    <div>
      <div>
        <div className="flex justify-between px-2 py-2 border-b border-b-slate-200 mb-2 ">
          <p className="text-pink-500 text-3xl font-semibold">{title}</p>
          <div>
            <button
              onClick={handleDelete}
              className={`bg-red-500 ${
                selectedData === null && "cursor-not-allowed opacity-50"
              }  unselectable mx-2 text-white border border-red-600  rounded-lg text-base font-semibold focus:bg-red-600 hover:bg-red-600 px-2 py-1`}
            >
              Delete
            </button>
            <button
              onClick={handleEdit}
              className={`bg-blue-500 ${
                selectedData === null && "cursor-not-allowed opacity-50"
              } unselectable text-white border border-blue-600 rounded-lg text-base font-semibold focus:bg-blue-600 hover:bg-blue-600 px-3 py-1`}
            >
              Edit
            </button>
            <button
              onClick={handleDetail && handleDetail}
              className={`bg-green-500 ${
                selectedData === null && "cursor-not-allowed opacity-50"
              } unselectable text-white ml-2 border border-green-600 rounded-lg text-base font-semibold focus:bg-green-600 hover:bg-green-600 px-3 py-1`}
            >
              Detail
            </button>
          </div>
        </div>
        <div className="flex justify-between py-2 font-semibold">
          <div className="flex items-center ">
            <p>Show</p>
            <select
              value={limit && limit}
              onChange={(e) => {
                setLimit && setLimit(e.target.value);
              }}
              className="h-10 w-[3.6rem] outline-none border-2 border-slate-300 rounded-md cursor-pointer focus:border-2-blue-400  mx-3"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="75">75</option>
              <option value="100">100</option>
            </select>
            <p>Entries</p>
          </div>
          <div className={`flex items-center`}>
            <label className="mr-2 font-semibold"> Search :</label>
            <input
              value={search && search}
              onChange={(e) => setSearch && setSearch(e.target.value)}
              type="text"
              placeholder="..."
              className="font-semibold py-2 outline-none px-2 focus:border-blue-400 border border-slate-200 rounded-md   "
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-scroll no-scroll">
        <table className="w-full bg-white border border-slate-100 rounded-md text-slate-800">
          <thead>
            <tr>
              {columns?.map((column, index) => (
                <th
                  key={index}
                  className={`py-2 px-4 border-b ${
                    column?.label.includes("Name") && "text-start"
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
                key={item._id || rowIndex}
                className={`${
                  rowIndex % 2 === 0 ? "bg-slate-200" : "bg-slate-100"
                } font-semibold  `}
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
    </div>
  );
};

export default DataTable;
