import React from "react";

const FloatingLabelInput = ({ label, type, value, onChange, name }) => {
  return (
    <div className="relative w-full mb-6">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="peer w-full px-4 pt-6 pb-2 text-sm bg-transparent border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
        placeholder=" "
      />
      <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-500">
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;