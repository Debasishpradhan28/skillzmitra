export default function SectionCard({ title, children }) {
  return (
    <div className="border rounded-lg p-4 bg-gray-50">
      <h3 className="text-sm font-semibold mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
}
