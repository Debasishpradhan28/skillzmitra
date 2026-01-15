export default function TemplateSelector({
  selected,
  onChange,
}) {
  return (
    <div className="mb-6">
      <label className="block font-medium mb-2">
        Change Template
      </label>

      <select
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className="border p-2 rounded w-full"
      >
        <option value="modern_professional">
          Modern Professional
        </option>
        <option value="minimal_white">
          Minimal White
        </option>
        <option value="creative_designer">
          Creative Designer
        </option>
      </select>
    </div>
  );
}
