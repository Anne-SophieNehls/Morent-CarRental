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
import { useSearch } from "@/context/searchContext";
import { supabase } from "@/lib/supabase";
import { useUserContext } from "@/context/userContext";

export default function Header() {
  const { user, setUser } = useUserContext();
  const handleLogoutClick = () => {
    setUser(null);
    supabase.auth.signOut();
  };
  const { setSearchFor } = useSearch();
  const { searchFor } = useSearch();
  return (
    <header className="flex space-x-72 m-10">
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
          onChange={(e) => {
            setSearchFor(e.target.value);
          }}
        />
      </form>
      <div className="flex space-x-2">
        {/*         <Button variant={"outline"} className="rounded-full">
          <LightDarkThemeSwitcher />
        </Button> */}
        <Button variant={"outline"} className="rounded-full">
          <img
            src="../../public/img/icons/glocke-grau-notification.svg"
            alt="profil img"
          />
        </Button>
        <Button variant={"outline"} className="rounded-full h-14">
          <img src="/img/icons/setting-zahnrad-icon.svg" alt="profil img" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} className="h-14 w-20 rounded-full ">
              <img
                src="/img/icons/profile-without-profilpictuare.svg"
                alt="profil img"
                className="h-14"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-white ">
            <DropdownMenuLabel>Hi, Max</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              {user && (
                <Link to="/profile/:id">
                  <span>
                    <img
                      src="/img/icons/zum-profile-icon.svg"
                      alt="to profil"
                    />
                    Profile
                  </span>
                </Link>
              )}
            </DropdownMenuItem>
            <DropdownMenuItem>
              {user && (
                <Link to="/profile/:id">
                  <span>
                    <img src="/img/icons/save-icon.svg" alt="to profil" />
                    My Bookings
                  </span>
                </Link>
              )}
            </DropdownMenuItem>
            <DropdownMenuItem>
              {user && (
                <Link to="/favorites/:id">
                  <span>
                    <img src="/img/icons/heart-gray-icon.svg" alt="to profil" />
                    Favorites
                  </span>
                </Link>
              )}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
