import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-end" id="nav">
      <a className="navbar-item">
        <Link
          to="/"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/' ? 'navbar-link is-active' : 'navbar-link'}
        >
          About Me
        </Link>
      </a>
      <a className="navbar-item">
        <Link
          to="/Blog"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Blog' ? 'navbar-link is-active' : 'navbar-link'}
        >
          Tech Blog
        </Link>
      </a>
      <a className="navbar-item">
        <Link
          to="/Projects"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Projects' ? 'navbar-link is-active' : 'navbar-link'}
        >
          Projects
        </Link>
      </a>
      <a className="navbar-item">
        <Link
          to="/Resume"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Resume' ? 'navbar-link is-active' : 'navbar-link'}
        >
          Resumé
        </Link>
      </a>
      <a className="navbar-item">
        <Link
          to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/Contact' ? 'navbar-link is-active' : 'navbar-link'}
        >
          Contact Me
        </Link>
      </a>
    </nav>
  );
}

export default NavTabs;
