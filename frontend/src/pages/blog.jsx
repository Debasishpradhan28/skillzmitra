// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./blog.css";

// function SidebarBlog() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios.get("https://dev.to/api/articles?per_page=5")
//       .then(res => {
//         const updatedPosts = res.data.map(post => ({
//           id: post.id,
//           title: post.title,
//           body: post.description || post.body_markdown,
//           date: new Date(post.published_at).toLocaleDateString(),
//           tags: post.tags.split(",").slice(0, 2), // take first 2 tags
//           thumbnail: post.cover_image || `https://picsum.photos/seed/${post.id}/80/80`,
//           url: post.url
//         }));
//         setPosts(updatedPosts);
//       })
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="blog-card">
//       <h2>Latest Blogs</h2>
//       <div className="blog-list">
//         {posts.map(post => (
//           <a key={post.id} href={post.url} target="_blank" rel="noopener noreferrer" className="blog-item">
//             <img src={post.thumbnail} alt="thumb" className="blog-thumb" />
//             <div className="blog-info">
//               <h3>{post.title}</h3>
//               <div className="blog-meta">
//                 <span className="blog-date">{post.date}</span>
//                 {post.tags.map(tag => (
//                   <span key={tag} className="blog-tag">{tag}</span>
//                 ))}
//               </div>
//               <p>{post.body.substring(0, 60)}...</p>
//             </div>
//           </a>
//         ))}
//       </div>
//       <button className="view-all-btn" onClick={() => window.open("https://dev.to/", "_blank")}>
//         View All
//       </button>
//     </div>
//   );
// }

// export default SidebarBlog;

import { useState, useEffect } from "react";
import axios from "axios";
import "./blog.css";

function SidebarBlog() {
  const [posts, setPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newBlog, setNewBlog] = useState({ title: "", body: "" });

  // Fetch latest blogs from Dev.to API
  useEffect(() => {
    axios.get("https://dev.to/api/articles?per_page=3")
      .then(res => {
        const updatedPosts = res.data.map(post => ({
          id: post.id,
          title: post.title,
          body: post.description || post.body_markdown,
          date: new Date(post.published_at).toLocaleDateString(),
          tags: post.tags.split(",").slice(0, 2),
          thumbnail: post.cover_image || `https://picsum.photos/seed/${post.id}/80/80`,
          url: post.url
        }));
        setPosts(updatedPosts);
      })
      .catch(err => console.error(err));
  }, []);

  // Add new blog post
  const handleCreateBlog = (e) => {
    e.preventDefault();
    if(newBlog.title && newBlog.body){
      const post = {
        id: Date.now(),
        title: newBlog.title,
        body: newBlog.body,
        date: new Date().toLocaleDateString(),
        tags: ["User Blog"],
        thumbnail: `https://picsum.photos/seed/${Date.now()}/80/80`
      };
      setMyPosts([post, ...myPosts]);
      setNewBlog({ title: "", body: "" });
      setShowForm(false);
    }
  };
  
  return (
    <div className="blog-wrapper">
      {/* Latest Blogs Card */}
      <div className="blog-card">
        <h2>Latest Blogs</h2>
        <div className="blog-list">
          {posts.map(post => (
            <a key={post.id} href={post.url} target="_blank" rel="noopener noreferrer" className="blog-item">
              <img src={post.thumbnail} alt="thumb" className="blog-thumb" />
              <div className="blog-info">
                <h3>{post.title}</h3>
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  {post.tags.map(tag => (
                    <span key={tag} className="blog-tag">{tag}</span>
                  ))}
                </div>
                <p>{post.body.substring(0, 60)}...</p>
              </div>
            </a>
          ))}
        </div>
        <button className="view-all-btn" onClick={() => window.open("https://dev.to/", "_blank")}>
          View All
        </button>
      </div>

      {/* My Blog Card */}
      <div className="blog-card">
        <h2>My Blog</h2>

        {/* Random Blog Example */}
        <div className="blog-item">
          <img src="https://picsum.photos/seed/random/80/80" alt="thumb" className="blog-thumb" />
          <div className="blog-info">
            <h3>How to Master React</h3>
            <div className="blog-meta">
              <span className="blog-date">Aug 17, 2025</span>
              <span className="blog-tag">React</span>
            </div>
            <p>Learn React step by step with practical examples and projects...</p>
          </div>
        </div>

        {/* User-created blogs */}
        {myPosts.map(post => (
          <div key={post.id} className="blog-item">
            <img src={post.thumbnail} alt="thumb" className="blog-thumb" />
            <div className="blog-info">
              <h3>{post.title}</h3>
              <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
                {post.tags.map(tag => <span key={tag} className="blog-tag">{tag}</span>)}
              </div>
              <p>{post.body.substring(0, 60)}...</p>
            </div>
          </div>
        ))}

        {/* Create Blog Button */}
        <button className="view-all-btn" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Cancel" : "Create Your Blog"}
        </button>

        {/* Blog Form */}
        {showForm && (
          <form className="blog-form" onSubmit={handleCreateBlog}>
            <input
              type="text"
              placeholder="Blog Title"
              value={newBlog.title}
              onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
              required
            />
            <textarea
              placeholder="Write your blog..."
              value={newBlog.body}
              onChange={(e) => setNewBlog({ ...newBlog, body: e.target.value })}
              required
            />
            <button type="submit" className="view-all-btn">Post Blog</button>
          </form>
        )}
      </div>
    </div>
    
  );
}

export default SidebarBlog;