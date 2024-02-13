import { React, useState } from "react";
import { useQueryClient } from "react-query";
import FormInput from "../components/FormInput";
const DoctorForm = ({ doctorId }) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData("all-doctors");

  const doctor = data?.data?.find((item) => {
    return item._id === doctorId;
  });
  //   console.log(doctor);
  const [fullname, setFullname] = useState(doctor?.fullname);
  const [email, setEmail] = useState(doctor?.email);
  const [specialization, setSpecialization] = useState(doctor?.specialization);
  const [experience, setExperience] = useState(doctor?.experience);
  const [phone, setPhone] = useState(doctor?.phone);
  const [age, setAge] = useState(doctor?.age);
  const [detail, setDetail] = useState(doctor?.detail);
  const [address, setAddress] = useState(doctor?.address);
  const [gender, setGender] = useState(doctor?.gender);
  const [picture, setPicture] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(doctor?.dateOfBirth);
  //   console.log(doctor.dateOfBirth);
  const handleSubmit = () => {};
  return (
    <div>
      <div>
        <p className="text-3xl unselectable pb-3 text-pink-500  border-b-slate-200 border-b   font-semibold">
          Edit Doctor
        </p>
        <div className="flex justify-between my-3 ">
          <FormInput
            label={"Doctor Name"}
            placeholder={"Doctor Name"}
            inputType={"text"}
            value={fullname}
            setValue={setFullname}
          />
          <FormInput
            value={dateOfBirth}
            setValue={setDateOfBirth}
            label={"Date of Birth"}
            inputType={"date"}
          />
        </div>
        <div className="flex justify-between my-3 ">
          <FormInput
            label={"Specialization"}
            placeholder={"Specialization"}
            inputType={"text"}
            value={specialization}
            setValue={setSpecialization}
          />
          <FormInput
            label={"Experience"}
            placeholder={"Experience"}
            inputType={"text"}
            value={experience}
            setValue={setExperience}
          />
        </div>
        <div className="flex justify-between my-3 ">
          <FormInput
            value={age}
            setValue={setAge}
            label={"Age"}
            placeholder={"Age"}
            inputType={"text"}
          />
          <FormInput
            label={"Phone Number"}
            placeholder={"Phone Number"}
            inputType={"text"}
            value={phone}
            setValue={setPhone}
          />
        </div>
        <div className="flex justify-between my-3 ">
          <FormInput
            value={email}
            setValue={setEmail}
            label={"Email"}
            placeholder={"Email"}
            inputType={"text"}
          />
          <div className="flex flex-1 flex-col mx-2 ">
            <label className="text-lg unselectable mb-2 pl-1 text-slate-700 font-semibold">
              Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="outline-none px-2 py-1 h-fit rounded-md font-base flex-1 focus:border-blue-400 border-slate-200 cursor-pointer  border"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>
        <div className="flex justify-between my-3 ">
          <div className="flex flex-1 mx-2  flex-col">
            <label className="text-lg unselectable mb-2 pl-1 text-slate-700 font-semibold">
              Doctor Details
            </label>
            <textarea
              className="border border-slate-200 outline-none hover:border-blue-400 rounded-md p-2"
              placeholder="Doctor Details"
              cols="30"
              rows="2"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            ></textarea>
          </div>
          <div className="flex flex-1 mx-2  flex-col">
            <label className="text-lg unselectable mb-2 pl-1 text-slate-700 font-semibold">
              Address
            </label>
            <textarea
              className="border border-slate-200 outline-none hover:border-blue-400 rounded-md p-2"
              placeholder="Address"
              cols="30"
              rows="2"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="my-1 flex flex-col">
          <label className="text-lg unselectable mb-1 pl-1 text-slate-700 font-semibold">
            Picture
          </label>
          <input
            className="border cursor-pointer p-2 unselectable border-slate-200 rounded-md outline-none focus:border-blue-400"
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              setPicture(file);
            }}
          />
        </div>

        <div className="w-full mt-3">
          <button
            onClick={handleSubmit}
            className="text-lg w-full hover:bg-pink-500/90 rounded-md unselectable white border-b px-2 py-2 bg-pink-500 text-white font-semibold"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorForm;
