import { Link, NavLink, useParams } from "react-router-dom";
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
import { useThemeContext } from "@/context/LightDarkModeContext";
import { useEffect, useState } from "react";
import { QueryData } from "@supabase/supabase-js";

export default function Header() {
  const { id } = useParams();
  const [name, setName] = useState<NameData | null>(null);

  const getName = async (id: string) => {
    const result = await supabase
      .from("profiles")
      .select("*")
      .eq("id", id)
      .single();
    return result;
  };
  type NameData = QueryData<ReturnType<typeof getName>>;

  useEffect(
    () => {
      if (id) {
        getName(id).then((result) => setName(result.data));
      }
    } /* eslint-disable */,
    [] /* eslint-enable */
  );

  const { theme } = useThemeContext();

  const { user, setUser } = useUserContext();
  const handleLogoutClick = () => {
    setUser(null);
    supabase.auth.signOut();
  };
  const { setSearchFor } = useSearch();
  // const { searchFor } = useSearch();
  return (
    <header
      className={`flex justify-between gap-10 items-center mb-10 pt-10 theme--${theme}-hf`}
    >
      <nav>
        <NavLink to="/">
          <h1 className="logo text-4xl">MORENT</h1>
        </NavLink>
      </nav>
      <form>
        <Input
          type="text"
          id="search"
          placeholder="Search here"
          className="rounded-full"
          onChange={(e) => {
            setSearchFor(e.target.value);
          }}
        />
      </form>
      <div className="flex">
        <LightDarkThemeSwitcher />

        <Button variant={"outline"} className="rounded-full h-auto ">
          <img
            src="/img/icons/glocke-grau-notification.png"
            alt="notification"
          />
        </Button>
        <Button variant={"outline"} className="rounded-full h-14 mx-2">
          <img src="/img/icons/setting-zahnrad-icon.svg" alt="settings" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant={"outline"}
              size={"icon"}
              className="h-14 w-14 rounded-full mx-2"
            >
              {/* {!user img : } */}
              <img
                src="/img/icons/profile-without-profilpictuare.svg"
                alt="profil img"
                className="h-14"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className={`w-56 bg-white  p-12 rounded-lg drop-shadow-lg mr-10 flex flex-col gap-4 theme--${theme}-drop z-50	`}
          >
            <DropdownMenuLabel>Hi,{name?.first_name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to="/profile/:id">
                <span className="flex gap-2">
                  <img src="/img/icons/zum-profile-icon.svg" alt="to profil" />
                  Profile
                </span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="bookings">
                <span className="flex gap-2 my-3">
                  <img src="/img/icons/save-icon.svg" alt="to my bookings" />
                  My Bookings
                </span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Link to={`/favorites/${user?.id}`}>
                <span className="flex gap-2">
                  <img
                    src="/img/icons/heart-gray-icon.svg"
                    alt="to my favorites"
                  />
                  Favorites
                </span>
              </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <Button className="bg-[#3563E9] text-white" asChild variant="ghost">
              {!user && <NavLink to="/login">Login</NavLink>}
            </Button>
            <Button
              className="bg-[#3563E9] text-white"
              asChild
              variant="ghost"
              onClick={handleLogoutClick}
            >
              {user && <NavLink to="/login">Logout</NavLink>}
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
