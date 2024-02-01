import { Link } from "react-router-dom";
import { useState } from "react"
import Button from './Button'

const Navbar = () => {

  const [ clicked, setClick ] = useState(false)


  const onClick = ()=>{

    setClick(!clicked)

  }

  return ( 
  <>
  <nav>
    <div className="logo">
      <Link to="/">Johnathan Specter</Link>
    </div>

    <ul className={clicked ? "navItems active" : "navItems"}>
      <li className="navitem">
        <Link to="/articles">Articles</Link>
      </li>
      <li className="navitem">
        <Link to="/chats">Chats</Link>
      </li>
      <li className="navitem">
        <Link to="/awards">Awards</Link>
      </li>
      <li className="navitem">
        <Link to="/about">About</Link>
      </li>
    </ul>
    <div className={clicked ? "burgerMenu active" : "burgerMenu"}
      onClick={onClick}>
    </div>
    <Button label='Get in touch'/>
  </nav>
  </> 
  );
}
 
export default Navbar;