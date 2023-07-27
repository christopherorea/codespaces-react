import { Link } from "react-router-dom";
import langs from '../config/translations.json';
import i18n from '../config/i18n';

const Navbar = ()=>{

    const languages = Object.keys(langs).map(l=> <button onClick={()=>changeLanguage(l)}>{l}</button>);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      }

    return(
        <div className="navbar">
            <Link to="/"><span>General</span></Link>
            <Link to="/pokemon"><span>Pokémon</span></Link>
            {languages}
        </div>
    )
};

export default Navbar;