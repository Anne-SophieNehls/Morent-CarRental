import tankIcon from "../../public/img/icons/tank-icon.svg";
import typeIcon from "../../public/img/icons/lenkrad-icon.svg";
import seatsIcon from "../../public/img/icons/personen-haben-gemietet-icon.svg";
import redHeartIcon from "../../public/img/icons/heart-red-icon.svg";
import whiteHartIcon from "../../public/img/icons/heart-outline-white.svg";
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
    <div className="w-1/5 p-3 bg-white rounded-lg">
      <div className="flex justify-between">
        <h2 className="font-bold">{`${props.brand} ${props.model}`}</h2>
        <div>
          <img src={redHeartIcon} alt="favorited" />
        </div>
      </div>
      <p className="text-xs font-semibold text-[]">{props.vehicleType}</p>
      <img className="rounded-xl" src={props.carImg} alt="Car Image" />
      <div className="flex justify-between">
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
      <div className="flex justify-between">
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
