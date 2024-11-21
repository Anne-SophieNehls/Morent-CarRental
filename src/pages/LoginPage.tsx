import { useUserContext } from "@/context/userContext";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await supabase.auth.signInWithPassword({ email, password });
    if (result.error) {
      alert(result.error.message);
    } else {
      setUser(result.data.user);
      navigate("/");
    }
  };
  return (
    <div className="w-96 p-3 bg-white rounded-lg">
      <form onSubmit={handleSubmit}>
        <h1 className="font-semibold text-2xl text-center mb-7">Login</h1>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="bg-[#3563E9] w-full">Sign in</Button>
      </form>
        <p>
          No Account? Register
          <Button asChild variant="ghost">
            {!user && <NavLink to="/sign-up">Here</NavLink>}
          </Button>
        </p>
    </div>
  );
}
