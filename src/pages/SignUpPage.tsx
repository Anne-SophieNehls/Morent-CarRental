import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import imageIcon from "../../public/img/icons/image-upload-icon.svg";
import { useState } from "react";
import { useUserContext } from "@/context/userContext";
import { supabase } from "@/lib/supabase";

export default function SignUpPage() {
const [email, setEmail] = useState("");
const [firstName, setFirstname] = useState("")
const [lastName, setLastname] = useState("");
const [password, setPassword] = useState("")
const {setUser} = useUserContext()

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();
const result = await supabase.auth.signUp({
email,
password,
options: {
data: { first_name: firstName, last_name: lastName },
},
});
if (result.error) {
alert(result.error.message);
} else {
setUser(result.data.user);
}
};

return (

  <div>
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit}>
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
      <br />
      <label htmlFor="E-mail">First Name</label>
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
        <Input type="image" src="" alt={` Image-Upload`}/>
      <Button>Sign up</Button>
    </form>
  </div>
);
}
