export default function FormattingWarnings() {
  return (
    <div className="bg-white rounded-xl border p-6">
      <h3 className="font-semibold mb-3">Formatting Warnings</h3>
      <ul className="space-y-2 text-gray-700">
        <li>⚠️ Tables detected</li>
        <li>⚠️ Two-column layout</li>
        <li>✔️ Standard headings found</li>
      </ul>
    </div>
  );
}
