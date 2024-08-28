export interface SelectProps {
  options: Options[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface Options {
  value: number | string;
  label: string;
}

const Select = ({ options, value, onChange }: SelectProps) => {
  return (
    <form className="max-w-sm">
      <select
        id="small"
        className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
        value={value}
        onChange={onChange}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </form>
  );
};

export default Select;
