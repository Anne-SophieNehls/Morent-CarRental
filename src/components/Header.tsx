import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">
          <h1>MORENT</h1>
        </NavLink>
      </nav>
      <form>
        <input type="text" id="search" />
      </form>
      <div>Profil</div>
    </header>
  );
}
