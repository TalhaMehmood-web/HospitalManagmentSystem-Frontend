import React, { useState, useEffect } from "react";
import FormInput from "../components/FormInput";
import { toast } from "react-toastify";

const FormComponent = ({ fields, onSubmit, heading, buttonText }) => {
  const [formData, setFormData] = useState({});
  const [formCheck, setFormCheck] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  useEffect(() => {
    setDisableButton(isButtonDisabled());
  }, [formCheck, formData]);

  const handleChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleCheckboxChange = () => {
    setFormCheck((prevValue) => !prevValue);
  };

  const handleSubmit = async () => {
    try {
      if (!formCheck || disableButton) {
        toast.error(`Fill all Fields and Confirm `, {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      } else {
        await onSubmit(formData);
      }
    } catch (error) {
      toast.error(`${error?.response?.data?.message}`, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const isButtonDisabled = () => {
    // Check if all fields are filled and the checkbox is checked
    const areAllFieldsFilled = Object.values(formData).every(
      (value) => value !== ""
    );

    return !formCheck || !areAllFieldsFilled;
  };

  return (
    <div>
      <p className="text-3xl unselectable pb-3 mb-4 text-pink-500  border-b-slate-200 border-b   font-semibold">
        {heading}
      </p>
      <div className="grid grid-cols-2 gap-4">
        {fields?.map((field, index) => (
          <div
            key={index}
            className={`${field.type === "file" ? "col-span-2" : ""} ${
              (field.type === "textarea" &&
                fields[0].label === "Patient Name") ||
              field.name === "problemDescription"
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
                    defaultValue={field.value && field.value}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                    className="outline-none px-2 py-2 h-fit rounded-md font-base flex-1 focus:border-blue-400 border-slate-200 cursor-pointer border"
                  >
                    {field.options.map((option, optionIndex) => (
                      <option key={optionIndex} value={option || field.value}>
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
                    value={formData[field.name] || field.value}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  ></textarea>
                </div>
              ) : (
                <FormInput
                  label={field.label}
                  placeholder={field.placeholder}
                  inputType={field.type}
                  value={formData[field.name] || field.value}
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
        <div>
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={formCheck}
            onChange={handleCheckboxChange}
          />
          <label className=" ml-4 text-xl font-semibold text-slate-800">
            Please Confirm
          </label>
        </div>
        <div className="col-span-2 mt-3">
          <button
            onClick={handleSubmit}
            className={`text-lg w-full ${
              buttonText
                ? " bg-green-500  hover:bg-green-500/90"
                : "hover:bg-pink-500/90  bg-pink-500"
            } ${
              disableButton && "cursor-not-allowed opacity-50"
            }  rounded-md unselectable white border-b px-2 py-2 text-white font-semibold  `}
          >
            {buttonText ? buttonText : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
