export default function KeywordMatch() {
  return (
    <div className="bg-white rounded-xl border p-6 grid grid-cols-2 gap-6">
      <div>
        <h4 className="font-semibold mb-2 text-green-600">Matched Keywords</h4>
        <ul className="text-gray-700 space-y-1">
          <li>React</li>
          <li>REST APIs</li>
          <li>Firebase</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-2 text-red-600">Missing Keywords</h4>
        <ul className="text-gray-700 space-y-1">
          <li>Docker</li>
          <li>CI/CD</li>
          <li>Unit Testing</li>
        </ul>
      </div>
    </div>
  );
}
