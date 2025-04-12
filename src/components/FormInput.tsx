import { Input } from "../types/Form";

const FormInput = ({
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}: Input) => (
  <div>
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border p-2 rounded"
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default FormInput;
