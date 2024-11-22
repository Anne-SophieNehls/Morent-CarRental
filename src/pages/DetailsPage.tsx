import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { QueryData } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import tankIcon from "/img/icons/tank-icon.svg";
import typeIcon from "/img/icons/lenkrad-icon.svg";
import seatsIcon from "/img/icons/personen-haben-gemietet-icon.svg";

export default function DetailsPage() {
  const { id } = useParams();
  const [car, setCar] = useState<CarData | null>(null);

  const getCar = async (id: string) => {
    const result = await supabase
      .from("vehicles")
      .select("*")
      .eq("id", id)
      .single();
    return result;
  };
  type CarData = QueryData<ReturnType<typeof getCar>>;

  useEffect(() => {
    if (id) {
      getCar(id).then((result) => setCar(result.data));
    }
  }, []);

  if (!car) {
    return "Loading...?";
  }
  
return (
    <div className="flex-">
        <div className="w-2/4 p-3 bg-white rounded-lg">
        <img className="rounded-xl mb-4" src={car.carImg} alt="Car Image" />
        </div>
        <div>
        <div className={`w-2/4 h-auto p-3 bg-white rounded-lg`}>
            <div className="flex justify-between">
                <h2
                className={`font-bold mb-2 mx-2 `}
                >{car.brand} {car.model} ({car.year})
                </h2>
        </div>
        <p className="text-xs font-semibold text-[#90A3BF] mb-1 mx-2">
        {car.vehicleType}
        </p>
        <div className="flex justify-between mb-6">
            <div className="flex">
                <img src={tankIcon} alt="tank-l-pro-100km" />
                <p className="text-[#6C757D] font-light text-sm self-center">
                {car.consumption}
                </p>
        </div>
        <div className="flex">
            <img src={typeIcon} alt="type-icon" />
            <p className="text-[#6C757D] font-light text-sm self-center">
            {car.gearType}
            </p>
        </div>
        <div className="flex">
            <img src={seatsIcon} alt="how many people" />
            <p className="text-[#6C757D] font-light text-sm self-center">
            {car.seats}
            </p>
        </div>
        <div className="flex">
            <img src={seatsIcon} alt="how many people" />
            <p className="text-[#6C757D] font-light text-sm self-center">
            {car.fuel} L
            </p>
        </div>
        <div className="flex">
            <img src={seatsIcon} alt="how many people" />
            <p className="text-[#6C757D] font-light text-sm self-center">
            {car.seats}
            </p>
        </div>
        </div>
        <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold">
                {`${car.pricePerDay}/`}
                <span className="text-xs text-[#90A3BF]">day</span>
            </h2>
            <Link to={`/details/${car.id}`}>
            <Button className="bg-[#3563E9]">Rent now</Button>
            </Link>
        </div>
        </div>
        </div>
    </div>
    );
}