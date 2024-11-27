import { Button } from "@/components/ui/button";
// import { Form } from "@/components/ui/form";
//import { Input } from "@/components/ui/input";
import { useThemeContext } from "@/context/LightDarkModeContext";
import { useUserContext } from "@/context/userContext";
import { /* getStorageURL, */ supabase } from "@/lib/supabase";
/* import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu"; */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Profile {
  id: string;
  first_name: string;
  last_name: string;
  image_url: string | null;
}

export default function ProfilePage() {
  const { theme } = useThemeContext();
  const { user } = useUserContext();
  const [profile, setProfile] = useState<Profile>();
  //let imageLink = profile?.image_url ? getStorageURL(profile.image_url) : null;

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();

        if (error) {
          console.error("Error loading user profile:", error);
        } else {
          setProfile(data);
          return data;
        }
      }
    };

    if (user) {
      fetchProfile();
    }
  }, [user]);

  /* const fileRef = useRef<HTMLInputElement>(null);
  // const [email, setEmail] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [profilImg, setprofilImg] = useState<string | null>(null); */

  /*   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await supabase.from("profiles")({
      options: {
        data: { first_name: firstName, last_name: lastName },
      },
    });
    if (result.error) {
      alert(result.error.message);
    } else {
      const file = fileRef.current?.files?.[0] || null;

      if (file && result.data.user) {
        const uploadResult = await supabase.storage
          .from("profile_image")
          .upload(`${result.data.user.id}/profile`, file, {
            upsert: true,
          });
        if (uploadResult.data) {
          await supabase
            .from("profiles")
            .update({ image_url: `${uploadResult.data.fullPath}` })
            .eq("id", result.data.user.id);
        }
      }
    }
  }; */
  /* 
  useEffect(() => {
    getUserData().then((result) => {
      setFirstname(result.data?.first_name || null);
      setLastname(result.data?.last_name || null);
      setprofilImg(result.data?.image_url || null);
    });
  }, []); */

  return (
    <div
      className={`w-96 p-3 bg-white shadow-sm ${`theme--${theme}-card`} flex flex-col gap-5 m-auto p-8 rounded-lg`}
    >
      <h2 className="font-semibold text-2xl text-center mb-7">My Profile</h2>
      {/*  <img
        src={imageLink || `/img/icons/profile-without-profilpictuare.svg`}
        alt="Profile Picture"
      /> */}
      <p>
        <span className="font-semibold ">First Name:</span>{" "}
        {profile?.first_name}
      </p>
      <p>
        <span className="font-semibold ">Last Name: </span> {profile?.last_name}
      </p>
      <p>
        <span className="font-semibold ">Email: </span> {user?.email}
      </p>
      <div>
        <Link to="/favorites">
          <Button className="bg-[#3563E9] m-2">Your Favorites</Button>
        </Link>
        <Link to="/booking">
          <Button className="bg-[#3563E9] m-2">Your Bookings</Button>
        </Link>
      </div>
      {/*  <DropdownMenu>
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

              <Button
                className="bg-[#3563E9] mt-5 w-full"
                onSubmit={handleSubmit}
              >
                <span className="flex gap-2 my-3">submit Changes</span>
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </div>
  );
}
