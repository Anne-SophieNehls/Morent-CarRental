import tankIcon from "/img/icons/tank-icon.svg";
import typeIcon from "/img/icons/lenkrad-icon.svg";
import seatsIcon from "/img/icons/personen-haben-gemietet-icon.svg";
// import redHeartIcon from "/img/icons/heart-red-icon.svg";
import whiteHeartIcon from "/img/icons/heart-outline-white.svg";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useThemeContext } from "@/context/LightDarkModeContext";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { useUserContext } from "@/context/userContext";

export interface CarCardProps {
  id: string;
  brand: string;
  carImg: string;
  model: string;
  vehicleType: string;
  year: string;
  pricePerDay: string;
  seats: string;
  consumption: string;
  gearType: string;
  heartIcon: string;
}

export default function CarCard(props: CarCardProps) {
	const { theme } = useThemeContext();
	const [isFavorited, setIsFavorited] = useState(false);

	const handleFavorite = async () => {
    	const {user} = useUserContext();
		if (user)
		{
			const result = await supabase
			.from("favorites")
			.insert([{user_id: user, vehicle_id: props.id,},]);
		}

  };

  return (
    <div className={`p-3 bg-white rounded-lg theme--${theme}-card`}>
      <div className="flex justify-between">
        <h2
          className={`font-bold mb-2 mx-2 `}
        >{`${props.brand} ${props.model}`}</h2>
        <div>
          <img className="hover:h-7" src={props.heartIcon} alt="favorited" onClick={handleFavorite}/>
        </div>
      </div>
      <p className="text-xs font-semibold text-[#90A3BF] mb-1 mx-2">
        {props.vehicleType}
      </p>
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
        <Link to={`/details/${props.id}`}>
          <Button className="bg-[#3563E9]">Rent now</Button>
        </Link>
      </div>
    </div>
  );
}
