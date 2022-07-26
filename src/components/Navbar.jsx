import { BiSearchAlt } from 'react-icons/fa';

const Navbar = () => (
  <nav>
    <ul className="header">
      <li><h2>Search by Category</h2></li>
      <li className="header-search">
        <h2>
          <BiSearchAlt />
        </h2>
      </li>
    </ul>
  </nav>
);

export default Navbar;
