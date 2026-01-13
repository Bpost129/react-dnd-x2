import { Link } from "react-router-dom"

import reactLogo from '../../assets/react.svg'

const NavBar = () => {
  return (
    <header>
      <img className="logo" src={reactLogo} alt="React Logo" />
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/monsters">Monsters</Link>
        <Link to="/spells">Spells</Link>
      </nav>
    </header>
  )
}

export default NavBar