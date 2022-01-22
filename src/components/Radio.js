import React from "react";

function Radio({ id, register, name, children, value }) {
  return (
    <div className="cursor-pointer flex items-center">
      <input
        className="sr-only peer"
        value={value}
        {...register(name)}
        type="radio"
        id={id}
      />
      <span className="w-2 h-2 mr-1 peer-hover:bg-gray-500 bg-gray-400 inline-block rounded-full peer-checked:bg-gray-500">
        &nbsp;
      </span>
      <label
        htmlFor={id}
        className="cursor-pointer text-gray-400 peer-hover:text-gray-500 peer-checked:text-gray-500 py-1 text-sm rounded-lg"
      >
        {children}
      </label>
    </div>
  );
}

export default Radio;
