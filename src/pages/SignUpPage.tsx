import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import imageIcon from "../../public/img/icons/image-upload-icon.svg";
import { useRef, useState } from "react";
import { useUserContext } from "@/context/userContext";
import { supabase } from "@/lib/supabase";
import { useThemeContext } from "@/context/LightDarkModeContext";

export default function SignUpPage() {
  const { theme } = useThemeContext();

  const [email, setEmail] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useUserContext();
  const fileRef = useRef<HTMLInputElement>(null);

  console.log(user);

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
  };

  return (
      </div>
    </section>
  );
}
