import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import imageIcon from "../../public/img/icons/image-upload-icon.svg";

export default function SignUpPage() {
  function handleRegister() {}

  return (
    <section>
      <form>
        <label htmlFor="E-mail">E-mail</label>
        <Input type="text" id="E-mail" />
        <label htmlFor="E-mail">First Name</label>
        <Input type="text" id="E-mail" />
        <label htmlFor="E-mail">Last name</label>
        <Input type="text" id="E-mail" />
        <label htmlFor="E-mail">Password</label>
        <Input type="text" id="E-mail" />
        <label htmlFor="E-mail">Upload Profile-Image</label>
        <img src={`${imageIcon}`} alt="" />
        <Input type="image" src="" alt={` Image-Upload`} />
        <Button className="bg-[#3563E9]" onClick={handleRegister}>
          {" "}
          Register{" "}
        </Button>
      </form>
    </section>
  );
}
