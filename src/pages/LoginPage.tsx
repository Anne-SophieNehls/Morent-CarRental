import { useUserContext } from "@/context/userContext"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useUserContext();
    const navigate = useNavigate

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await supabase.auth.signInWithPassword({ email, password });
        if (result.error) {
          alert(result.error.message);
        } else {
          setUser(result.data.user);
          navigate('/')
        }
      };
    return(
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
        <button>Sign in</button>
        <p>No Account? Register Here</p>
      </form>
    </div>
    )
}