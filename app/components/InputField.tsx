import React from "react";

interface InputFieldProps {
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ placeholder }) => {
  return (
    <div className="m-4">
      <input
        className="bg-[#E8E5E5] color-[#656464] rounded p-4 w-full"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
