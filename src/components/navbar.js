import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <div className="navbar">
            <Link to="/"><span>General</span></Link>
            <Link to="/pokemon"><span>Pokémon</span></Link>
        </div>
    )
};

export default Navbar;