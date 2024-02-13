import React, { useState } from "react";
import FormInput from "../components/FormInput";

const FormComponent = ({ fields, onSubmit, heading }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await onSubmit(formData);
    } catch (error) {
      console.error("Form submission error:", error?.response?.data?.message);
    }
  };

  return (
    <div>
      <p className="text-3xl unselectable pb-3 mb-4 text-pink-500  border-b-slate-200 border-b   font-semibold">
        {heading}
      </p>
      <div className="grid grid-cols-2 gap-4">
        {fields.map((field, index) => (
          <div
            key={index}
            className={`${field.type === "file" ? "col-span-2" : ""} ${
              field.type === "textarea" && fields[0].label === "Patient Name"
                ? "col-span-2"
                : ""
            }  `}
          >
            {field.type !== "file" ? (
              field.type === "select" ? (
                <div className="flex flex-1 flex-col mx-2">
                  <label className="text-lg unselectable mb-2 pl-1 text-slate-700 font-semibold">
                    {field.label}
                  </label>
                  <select
                    value={formData[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className="outline-none px-2 py-2 h-fit rounded-md font-base flex-1 focus:border-blue-400 border-slate-200 cursor-pointer border"
                  >
                    {field.options.map((option, optionIndex) => (
                      <option key={optionIndex} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              ) : field.type === "textarea" ? (
                <div
                  className={`flex flex-1 col-span-1 mx-2 ${
                    fields[0].label === "Patient Name" && "col-span-1"
                  }  flex-col`}
                >
                  <label className="text-lg unselectable mb-2 pl-1 text-slate-700 font-semibold">
                    {field.label}
                  </label>
                  <textarea
                    className={`border w-full col-span-1  border-slate-200 outline-none hover:border-blue-400 rounded-md p-2`}
                    placeholder={field.placeholder}
                    cols="30"
                    rows="2"
                    value={formData[field.name] || ""}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  ></textarea>
                </div>
              ) : (
                <FormInput
                  label={field.label}
                  placeholder={field.placeholder}
                  inputType={field.type}
                  value={formData[field.name] || ""}
                  setValue={(value) => handleChange(field.name, value)}
                />
              )
            ) : (
              <>
                <label className="text-lg mb-1 text-slate-700 font-semibold">
                  {field.label}
                </label>
                <input
                  className="border cursor-pointer p-2 unselectable border-slate-200 rounded-md outline-none focus:border-blue-400 w-full"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setFormData((prevData) => ({
                      ...prevData,
                      [field.name]: file,
                    }));
                  }}
                />
              </>
            )}
          </div>
        ))}

        <div className="col-span-2 mt-3">
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

export default FormComponent;
