import { Checkbox } from "../types/Form";

const FormCheckbox = ({ name, checked, onChange, label, error }: Checkbox) => (
  <div>
    <label className="flex items-center space-x-2 text-sm">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default FormCheckbox;
