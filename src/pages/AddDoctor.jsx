import React from "react";
import FormInput from "../components/FormInput";
const AddDoctor = () => {
  return (
    <div className="">
      <p className="text-3xl unselectable pb-3 text-pink-500  border-b-slate-200 border-b   font-semibold">
        Add Doctor
      </p>

      <div>
        <div className="flex justify-between my-3 ">
          <FormInput
            label={"Doctor Name"}
            placeholder={"Doctor Name"}
            inputType={"text"}
          />
          <FormInput label={"Date of Birth"} inputType={"date"} />
        </div>
        <div className="flex justify-between my-3 ">
          <FormInput
            label={"Specialization"}
            placeholder={"Specialization"}
            inputType={"text"}
          />
          <FormInput
            label={"Experience"}
            placeholder={"Experience"}
            inputType={"text"}
          />
        </div>
        <div className="flex justify-between my-3 ">
          <FormInput label={"Age"} placeholder={"Age"} inputType={"text"} />
          <FormInput
            label={"Phone Number"}
            placeholder={"Phone Number"}
            inputType={"text"}
          />
        </div>
        <div className="flex justify-between my-3 ">
          <FormInput label={"Email"} placeholder={"Email"} inputType={"text"} />
          <div className="flex flex-1 flex-col mx-2 ">
            <label className="text-lg unselectable mb-2 pl-1 text-slate-700 font-semibold">
              Gender
            </label>
            <select className="outline-none px-2 py-1 h-fit rounded-md font-base flex-1 focus:border-blue-400 border-slate-200 cursor-pointer  border">
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
          />
        </div>

        <div className="w-full mt-3">
          <button className="text-lg w-full hover:bg-pink-500/90 rounded-md unselectable white border-b px-2 py-2 bg-pink-500 text-white font-semibold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
