import { useBlogsContext } from "./BlogData";
import { Link } from "react-router-dom";
const BlogList = () => {
  const { blogs } = useBlogsContext();
  const createExcerpt = (text, numWords) => {
    const words = text.split(" ");
    if (words.length > numWords) {
      return words.slice(0, numWords).join(" ") + " ...";
      return text;
    }
  };
  return (
    <div className="blog-list">
      <h2 id="blog-list-title">All Blogs</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link className="blog-link" to={`/blogs/${blog.id}`}>
            <img src={blog.image} alt={blog.title} />
            <h2>{blog.title}</h2>
            <p id="body">{createExcerpt(blog.body, 15)}</p>
          </Link>
          <p>Written by {<Link className="blog-author" to={`/authors/${blog.author}`}>{blog.author}</Link>}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
