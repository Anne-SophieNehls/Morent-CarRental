import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
     
      <nav>
        <NavLink to={"/"}>
         <h1>logo</h1>
         </Navlink>
          </nav>
      <div>Profil</div>
    </header>
  );
}
