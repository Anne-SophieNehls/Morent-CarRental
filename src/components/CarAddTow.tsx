import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function CarAddTwo() {
  return (
    <div className="text-white h-80	 rounded-md bg-[url('/img/Background-Ads2.svg')] p-10">
      <h2 className="text-3xl w-3/5	">Easy way to rent a car at a low price</h2>
      <p className="py-5 w-2/3 pb-8">
        Ease of doing a car rental safely and reliably. Of course at a low
        price.
      </p>
      <Button className="bg-[#54a6ff] ">
        <Link to="/rent/:id">Rental Car</Link>
      </Button>
      <img
        src="/img/autoAdd2.png"
        alt=""
        className="pl-20 w-4/5	-mt-12 slide-right"
      />
    </div>
  );
}
