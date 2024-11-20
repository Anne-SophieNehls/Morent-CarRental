import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function CarAddOne() {
  return (
    <div className="text-white h-80	rounded-md bg-[url('public/img/Background-Ads1.svg')] p-10 w-2/5">
      <h2 className="text-3xl w-1/2	">The Best Platform for Car Rental</h2>
      <p className="py-5 w-1/2	">
        Providing cheap car rental services and safe and comfortable facilities.
      </p>
      <Button className="bg-[#3563E9] my-5">
        <Link to="/rent/:id">Rental Car</Link>
      </Button>
      <img src="../../public/img/autoAdd1.png" alt="" className="pl-36 w-5/6" />
    </div>
  );
}