import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <h1>MORENT</h1>
        </NavLink>
      </nav>
      <div>Profil</div>
    </header>
  );
}
