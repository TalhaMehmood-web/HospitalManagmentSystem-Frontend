import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import DetailComponent from "../../miscellaneous/DetailComponent";
const DoctorsDetail = () => {
  const { doctorId } = useParams();
  const getDoctorActivity = async () => {
    try {
      return await axios.get(
        `http://localhost:5000/api/v1/doctor/doctor-activity/${
          doctorId && doctorId
        }`
      );
    } catch (error) {
      console.log(error);
    }
  };
  const { data } = useQuery("doctor-activity", getDoctorActivity, {
    staleTime: 0,
  });
  const bioFields = [
    {
      label: "Specialization",
      name: "specialization",
    },
    {
      label: "Experience",
      name: "experience",
    },
    {
      label: "Gender",
      name: "gender",
    },
    {
      label: "Address",
      name: "address",
    },
    {
      label: "Phone",
      name: "phone",
    },
    {
      label: "Date Of Birth ",
      name: "dateOfBirth",
    },
    {
      label: "Email",
      name: "email",
    },
  ];
  return (
    <>
      {!doctorId ? (
        <div className=" h-[calc(100vh-161px)]  flex  justify-center items-center text-black">
          <p className="text-4xl font-semibold">
            First select a document to see details
          </p>
        </div>
      ) : (
        <>
          <div className="bg-slate-100 rounded-md ">
            <div className="  bg-white border-b border-b-slate-200 ">
              <p className="text-pink-500 p-3 font-semibold text-3xl pb-2">
                Doctor Details
              </p>
            </div>

            <div className="h-fit grid grid-cols-1 bg-transparent ">
              <div className="grid grid-cols-3 gap-4 shadow-sm  p-3 rounded-md  ">
                <div className="border unselectable p-2 border-slate-500/20 bg-slate-200/10 rounded-md flex flex-col justify-center items-center">
                  <img
                    className="
              rounded-full w-[15rem] h-[15rem] object-cover aspect-auto
               "
                    src={`${data?.data?.doctor?.picture}`}
                    alt={`${data?.data?.doctor?.name}`}
                  />
                  <p className="text-2xl my-2 text-slate-800 font-semibold">
                    {data?.data?.doctor?.fullname}
                  </p>
                  <p className="w-full text-start text-base text-slate-800/70 font-medium px-3">
                    {data?.data?.doctor?.detail === ""
                      ? "Not Added yet"
                      : `${data?.data?.doctor?.detail}`}
                  </p>
                </div>
                <div className=" col-span-2 border border-slate-500/20 rounded-md ">
                  <DetailComponent
                    doctorData={data?.data?.doctor && data?.data?.doctor}
                    bioFields={bioFields}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 mt-4  rounded-md">
            <div className="px-3 bg-white border-b border-b-slate-200  ">
              <p className="text-pink-500 font-semibold text-3xl pb-2">
                Doctor Activity
              </p>
            </div>
            <div className="overflow-x-auto  no-scroll mt-4">
              {data?.data?.activity.length !== 0 ? (
                <table className="table-auto min-w-full divide-y bg-slate-100">
                  <thead className="">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Patient Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Patient Picture
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Injury/Condition
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Visit Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-slate-100 divide-y divide-gray-200">
                    {data?.data?.activity.map((item, index) => (
                      <tr
                        className={` ${index % 2 === 0 && "bg-white"}`}
                        key={item?._id}
                      >
                        <td className={`px-6 py-4 whitespace-nowrap`}>
                          {item?.patientName}
                        </td>
                        <td className="px-6 py-2  whitespace-nowrap">
                          <div className="flex ">
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src={`${item?.patientPicture}`}
                              alt="Patient Picture"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item?.injury}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item?.visitDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="bg-green-100 text-green-800 rounded-full px-2 py-1 text-xs font-semibold">
                            {item?.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="mt-4 text-center w-full text-xl font-semibold">
                  No Activity Yet
                </p>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DoctorsDetail;
