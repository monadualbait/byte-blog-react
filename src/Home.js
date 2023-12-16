import BlogData from "./BlogData";
import Navbar from "./Navbar";
import BlogList from "./BlogList";
const Home = () => {
  return (
    <div>
      <Navbar />
      <BlogData>
        <BlogList />
      </BlogData>
    </div>
  );
};

export default Home;
