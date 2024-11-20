import tankIcon from "../../public/img/icons/tank-icon.svg";
import typeIcon from "../../public/img/icons/lenkrad-icon.svg";
import seatsIcon from "../../public/img/icons/personen-haben-gemietet-icon.svg";
import redHeartIcon from "../../public/img/icons/heart-red-icon.svg";
import whiteHeartIcon from "../../public/img/icons/heart-outline-white.svg";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface CarCardProps {
  brand: string;
  carImg: string;
  model: string;
  vehicleType: string;
  year: string;
  pricePerDay: string;
  seats: string;
  consumption: string;
  gearType: string;
}

export default function CarCard(props: CarCardProps) {
  return (
    <div className="w-1/4 p-3 bg-white rounded-lg">
      <div className="flex justify-between">
        <h2 className="font-bold mb-2 mx-2">{`${props.brand} ${props.model}`}</h2>
        <div>
          <img className="hover:h-7" src={whiteHeartIcon} alt="favorited" />
        </div>
      </div>
      <p className="text-xs font-semibold text-[#90A3BF] mb-1 mx-2">{props.vehicleType}</p>
      <img className="rounded-xl mb-4" src={props.carImg} alt="Car Image" />
      <div className="flex justify-between mb-6">
        <div className="flex">
          <img src={tankIcon} alt="tank-l-pro-100km" />
          <p className="text-[#6C757D] font-light text-sm self-center">
            {props.consumption}
          </p>
        </div>
        <div className="flex">
          <img src={typeIcon} alt="type-icon" />
          <p className="text-[#6C757D] font-light text-sm self-center">
            {props.gearType}
          </p>
        </div>
        <div className="flex">
          <img src={seatsIcon} alt="how many people" />
          <p className="text-[#6C757D] font-light text-sm self-center">
            {props.seats}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold">
          {`${props.pricePerDay}/`}
          <span className="text-xs text-[#90A3BF]">day</span>
        </h2>
        <Link to="/details/:id">
          <Button className="bg-[#3563E9]">Rent now</Button>
        </Link>
      </div>
    </div>
  );
}
