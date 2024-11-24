import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import imageIcon from "../../public/img/icons/image-upload-icon.svg";
import { useRef, useState } from "react";
import { useUserContext } from "@/context/userContext";
import { supabase } from "@/lib/supabase";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const { setUser } = useUserContext();
  const fileRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { first_name: firstName, last_name: lastName, image_url: image },
      },
    });
    if (result.error) {
      alert(result.error.message);
    } else {
      setUser(result.data.user);
    }
  };

  return (
    <form className="w-96 p-3 bg-white rounded-lg mx-auto">
      <h1 className="font-semibold text-2xl text-center mb-7">
        Neuen Account anlegen
      </h1>
      <div>
        <div onSubmit={handleSubmit}>
          <label htmlFor="E-mail">E-mail</label>
          <Input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="E-mail">Password</label>
          <Input
            type="password"
            placeholder="passwort"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="E-mail">First name</label>
          <Input
            type="text"
            placeholder="Vorname"
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <label htmlFor="E-mail">Last name</label>
          <Input
            type="text"
            placeholder="Nachname"
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
          />
          <img src={`${imageIcon}`} alt="" />
          <label>Profile picture</label>
          <Input type="file" src="" alt={` Image-Upload`} ref={fileRef} />
          <Button className="bg-[#3563E9] w-full">Sign up</Button>
        </div>
      </div>
    </form>
  );
}
