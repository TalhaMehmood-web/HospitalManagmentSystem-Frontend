import React from "react";

const FormInput = ({ placeholder, label, inputType, className }) => {
  return (
    <div className="flex flex-1 mx-2  flex-col">
      <label className="text-lg unselectable mb-2 pl-1 text-slate-700 font-semibold">
        {label}
      </label>
      <input
        className={`border unselectable border-slate-200 rounded-md p-2 outline-none focus:border-blue-400 ${className} `}
        type={`${inputType}`}
        placeholder={`${placeholder}`}
      />
    </div>
  );
};

export default FormInput;
