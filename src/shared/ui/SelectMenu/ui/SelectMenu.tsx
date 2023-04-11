interface Option {
  value: string;
  key: string;
}

interface SelectMenuProps {
  label: string;
  id: string;
  options: Option[];
  onChange: (option: string) => void;
}

export default function SelectMenu({
  label,
  id,
  options,
  onChange
}: SelectMenuProps) {
  return (
    <div className="flex items-center justify-center gap-3">
      <label
        htmlFor={id}
        className="mt-1.5 block whitespace-nowrap text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <select
        onChange={(e) => onChange(e.target.value)}
        id={id}
        name={id}
        className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6"
        defaultValue={options[0].key}
      >
        {options.map((i) => (
          <option key={i.key} value={i.key}>
            {i.value}
          </option>
        ))}
      </select>
    </div>
  );
}
