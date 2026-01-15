export default function SectionOrderControl({ sections, onChange }) {
  const move = (index, dir) => {
    const updated = [...sections];
    const swap = index + dir;
    if (swap < 0 || swap >= sections.length) return;

    [updated[index], updated[swap]] = [
      updated[swap],
      updated[index],
    ];
    onChange(updated);
  };

  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold mb-2">
        Section Order
      </h3>

      {sections.map((sec, i) => (
        <div
          key={sec}
          className="flex justify-between items-center border rounded p-2 mb-1 text-sm"
        >
          <span className="capitalize">{sec}</span>
          <div className="space-x-2">
            <button onClick={() => move(i, -1)}>↑</button>
            <button onClick={() => move(i, 1)}>↓</button>
          </div>
        </div>
      ))}
    </div>
  );
}
