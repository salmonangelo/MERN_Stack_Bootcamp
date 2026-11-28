import { NavLink } from "react-router-dom";

const links = [
  { to: "/home", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/registration", label: "Registration" },
];

function NavBar() {
  return (
    <nav className="app-nav" aria-label="Main navigation">
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => (isActive ? "app-nav__link is-active" : "app-nav__link")}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavBar;
