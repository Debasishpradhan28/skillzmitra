// import React, { useEffect, useState } from "react";
// import TemplateCard from "../components/TemplateCard";

// function Templates() {
//   const [templates, setTemplates] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/templates")
//       .then((res) => res.json())
//       .then((data) => setTemplates(data));
//   }, []);

//   return (
//     <div>
//       <h2>Choose Your Resume Template</h2>
//       <div className="grid">
//         {templates.map((t) => (
//           <TemplateCard key={t.id} template={t} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Templates;