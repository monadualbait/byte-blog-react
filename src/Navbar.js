import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
        <div className="logo">
         <Link to="/">
         <img src="https://i.imgur.com/8AWfkbg.png" alt="logo" />
         </Link>
        </div>
          <Link to="/"><h1>The Byte Blog</h1></Link>
          
        <div className="links">
          <Link to="/"><p>Home</p></Link>
          <Link to="/create">New Blog</Link>
        </div>
      </nav>
     );
}
 
export default Navbar;