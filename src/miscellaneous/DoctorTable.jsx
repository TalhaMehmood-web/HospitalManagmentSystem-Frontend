import React from "react";

const DoctorTable = () => {
  return (
    <div>
      <table className="min-w-full  bg-white border border-slate-100 rounded-md text-slate-800">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Select</th>
            <th className="py-2 px-4 border-b">Doctor ID</th>
            <th className="py-2 px-4 border-b">Doctor Picture</th>
            <th className="py-2 px-4 border-b">Doctor Name</th>
            <th className="py-2 px-4 border-b">Experience</th>
            <th className="py-2 px-4 border-b ">Phone</th>
            <th className="py-2 px-4 border-b ">Specialization</th>
            <th className="py-2 px-4 border-b">Availability</th>
          </tr>
        </thead>
        <tbody>
          {/* {data?.data.map((doctor, index) => (
              <tr
                className={`${
                  index % 2 === 0 ? "bg-slate-200" : "bg-slate-100"
                } font-semibold `}
                key={doctor._id}
              >
                <td className="py-2 px-4 border-b text-center">
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    checked={selectedDoctor === doctor._id}
                    onChange={() => handleCheckboxChange(doctor._id)}
                  />
                </td>
                <td className="py-2 px-4 border-b text-center">{doctor._id}</td>
                <td className="py-2 px-4 border-b flex  justify-center">
                  <img
                    className="w-[45px] h-[45px] rounded-full object-cover "
                    src={`${doctor.picture}`}
                    alt=""
                  />
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {doctor.fullname}
                </td>

                <td className="py-2 px-4 border-b text-center">
                  {doctor.experience}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {doctor.phone}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {doctor.specialization}
                </td>
                <td className="py-2 px-4 border-b text-center">{doctor.age}</td>
              </tr>
            ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorTable;
