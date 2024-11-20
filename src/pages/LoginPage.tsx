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
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
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
        <Button>Sign in</Button>
        <p>
          No Account? Register{" "}
          <Button asChild variant="ghost">
            {!user && <NavLink to="/signup">Here</NavLink>}
          </Button>
        </p>
      </form>
    </div>
  );
}
