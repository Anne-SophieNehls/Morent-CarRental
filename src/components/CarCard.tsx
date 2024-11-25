import tankIcon from "/img/icons/tank-icon.svg";
import typeIcon from "/img/icons/lenkrad-icon.svg";
import seatsIcon from "/img/icons/personen-haben-gemietet-icon.svg";
import redHeartIcon from "/img/icons/heart-red-icon.svg";
import whiteHeartIcon from "/img/icons/heart-outline-white.svg";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useThemeContext } from "@/context/LightDarkModeContext";
import { supabase } from "@/lib/supabase";
import { useUserContext } from "@/context/userContext";
import { useEffect, useState } from "react";

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
}

export default function CarCard(props: CarCardProps) {
	const { theme } = useThemeContext();
	const { user } = useUserContext();
	const [isFavorite, setIsFavorite] = useState<boolean>(false);

	const checkFavorite = async () => {
		if (!user)
			return;

		const { data, error } = await supabase
		.from("favorites")
		.select("id")
		.eq("user_id", user.id)
		.eq("vehicle_id", props.id);
	  
	  if (error) {
		console.error("Fehler bei der Favoritenabfrage:", error);
	  }

		setIsFavorite(!!data);
	}

	const handleFavorite = async () => {
		if (user ){
			if (!isFavorite){
				await supabase
				.from("favorites")
				.insert([{user_id: user.id, vehicle_id: props.id,},]);
				setIsFavorite(true);
			} else {
				await supabase
				.from("favorites")
				.delete()
				.eq("user_id", user.id)
				.eq("vehicle_id", props.id);
			  setIsFavorite(false);
			}
		}
	};

	useEffect(() => {
		checkFavorite();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);


  return (
    <div className={`p-3 bg-white rounded-lg theme--${theme}-card`}>
      <div className="flex justify-between">
        <h2
          className={`font-bold mb-2 mx-2 `}
        >{`${props.brand} ${props.model}`}</h2>
        <div>
          <img className="hover:h-7" src={isFavorite ? whiteHeartIcon : redHeartIcon} alt="favorited" onClick={handleFavorite}/>
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