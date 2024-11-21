import { supabase } from "@/lib/supabase";
import { QueryData } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h1>
        {car.brand} {car.model} ({car.year})
      </h1>
      <img src={car.carImg} alt="" />
      <div>
      <p>Vehicle type: {car.vehicleType}</p>
      <p>Gear: {car.gearType}</p>
      <p>HP: {car.ps}ps</p>
      <p>Colour: {car.colors}</p>
      <p>Capacity: {car.seats} Persons</p>
      <p>Fuel: {car.fuel}</p>
      <p>Usage/100Km: {car.consumption}L</p>
      <p>Luggage: {car.luggage}</p>
      </div>
    </div>
  );
}
