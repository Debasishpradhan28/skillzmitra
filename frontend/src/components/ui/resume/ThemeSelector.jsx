export default function ThemeSelector({
  colors,
  selected,
  onChange,
}) {
  return (
    <div className="mb-6">
      <label className="block font-medium mb-2">
        Theme Color
      </label>

      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => onChange(color)}
            className={`w-8 h-8 rounded-full border-2
              ${
                selected === color
                  ? "border-black"
                  : "border-transparent"
              }
              bg-${color}-600`}
          />
        ))}
      </div>
    </div>
  );
}
