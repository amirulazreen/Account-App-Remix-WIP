import { NavLink } from "@remix-run/react";

function MainNavigation() {
  return (
    <nav className="main-navigation">
      <ul>
        <li className="nav-item">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/account"}>App</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
