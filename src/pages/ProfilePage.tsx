import { Button } from "@/components/ui/button";
// import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUserContext } from "@/context/userContext";
import { getStorageURL, supabase } from "@/lib/supabase";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  const { user } = useUserContext();
  const fileRef = useRef<HTMLInputElement>(null);
  // const [email, setEmail] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [profilImg, setprofilImg] = useState<string | null>(null);

  const getUserData = async () => {
    const resultprofil = await supabase
      .from("profiles")
      .select("*") /* eslint-disable */
      .eq("id", user?.id!)
      /* eslint-enable */
      .single();
    return resultprofil;
  };

  const handleFileUpload = async () => {
    const file = fileRef.current?.files?.[0] || null;

    let imagePath: string | null = null;

    if (file) {
      const uploadResult = await supabase.storage
        .from("image")
        .upload(`${user?.id}/${crypto.randomUUID()}`, file, { upsert: true });
      imagePath = uploadResult.data?.fullPath || null;
    }
  };

  useEffect(() => {
    getUserData().then((result) => {
      setFirstname(result.data?.first_name || null);
      setLastname(result.data?.last_name || null);
      setprofilImg(result.data?.image_url || null);
    });
  }, []);

  const imageURL = getStorageURL(profilImg);

  const { user } = useUserContext();

  return (
    <div>
      <h2>My Profile</h2>
      <img
        src={imageURL || `/img/icons/profile-without-profilpictuare.svg`}
        alt="Profile Picture"
      />
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
