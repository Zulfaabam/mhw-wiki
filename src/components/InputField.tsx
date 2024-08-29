import { InputHTMLAttributes } from "react";

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputField = ({ label, value, onChange, ...props }: InputFieldProps) => {
  return (
    <div>
      <label htmlFor="first_name" className="block mb-2 text-sm font-medium">
        {label}
      </label>
      <input
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default InputField;
