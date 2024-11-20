import { Link, NavLink } from "react-router-dom";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import LightDarkThemeSwitcher from "./LightDarkThemeSwitcher";

export default function Header() {
  function handleLogout() {}

  return (
    <header className="flex m-10 justify-between">
      <nav>
        <NavLink to="/">
          <h1 className="logo text-5xl	">MORENT</h1>
        </NavLink>
      </nav>
      <form>
        <Input
          type="text"
          id="search"
          placeholder="Search here"
          className="pr-60 rounded-full"
        />
      </form>
      <div className="flex">
        {/*         <Button variant={"outline"} className="rounded-full">
          <LightDarkThemeSwitcher />
        </Button> */}
        <Button variant={"outline"} className="rounded-full">
          <img
            src="../../public/img/icons/glocke-grau-notification.svg"
            alt="profil img"
          />
        </Button>
        <Button variant={"outline"} className="rounded-full">
          <img
            src="../../public/img/icons/setting-zahnrad-icon.svg"
            alt="profil img"
          />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"}>
              <img
                src="../../public/img/icons/profile-without-profilpictuare.svg"
                alt="profil img"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-white ">
            <DropdownMenuLabel>Hi, Max</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to="/profile/:id">
                <span>
                  <img
                    src="../../public/img/icons/zum-profile-icon.svg"
                    alt="to profil"
                  />
                  Profile
                </span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/profile/:id">
                <span>
                  <img
                    src="../../public/img/icons/save-icon.svg"
                    alt="to profil"
                  />
                  My Bookings
                </span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/favorites/:id">
                <span>
                  <img
                    src="../../public/img/icons/heart-gray-icon.svg"
                    alt="to profil"
                  />
                  Favorites
                </span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Button onClick={handleLogout}>
              <span>Log out</span>
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
