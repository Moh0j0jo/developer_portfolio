import { Link } from "react-router-dom";
import SocIcons from "./SocIcons";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <Link to="/">Johnathan Specter</Link>
      </div>
      <SocIcons/>
    </footer>
  );
}
 
export default Footer;