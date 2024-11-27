import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUserContext } from "@/context/userContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const { user } = useUserContext();

  return (
    <div>
      <h2>My Profile</h2>
      <img src="" alt="Ptofile Picture" />
      <p>First Name: {user?.id}</p>
      <p>Last Name: </p>
      <p>Email: </p>
      <div>
        <Link to="/favorites">
          <Button>Your Favorites</Button>
        </Link>
        <Link to="/booking">
          <Button>Your Bookings</Button>
        </Link>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"outline"}
            size={"icon"}
            className="h-14 w-14 rounded-full mx-2"
          >
            Change Profil
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={`w-56 bg-white  p-12 rounded-lg drop-shadow-lg mr-10 flex flex-col gap-4 theme--${theme}-drop z-50	`}
        >
          <DropdownMenuLabel> What do you want to change?</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <form>
              <div>
                <label htmlFor="E-mail">First name</label>
                <Input
                  className="rounded-full w-4/5"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="E-mail">Last name</label>
                <Input
                  className="rounded-full w-4/5"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div>
                <label>Profile picture</label>
                <Input
                  className="rounded-full w-4/5"
                  type="file"
                  src=""
                  alt={` Image-Upload`}
                  ref={fileRef}
                />
              </div>
              <Button className="bg-[#3563E9] mt-5 w-full">
                Confirm your Changes
              </Button>
            </form>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="bookings">
              <span className="flex gap-2 my-3">
                <img src="/img/icons/save-icon.svg" alt="to profil" />
                My Bookings
              </span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
