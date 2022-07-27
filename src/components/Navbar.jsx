import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar-searchbar">
      <li><h2>Search your amiibo</h2></li>
      <li>
        <AiOutlineSearch className="navbar-searchbar__icon" />
      </li>
    </ul>
  </nav>
);

export default Navbar;
