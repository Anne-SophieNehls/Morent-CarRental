import CarAddOne from "@/components/CarAddOne";
import CarAddTwo from "@/components/CarAddTow";
import CarCard from "@/components/CarCard";
import { supabase } from "@/lib/supabase";
import { QueryData } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [vehiclesData, setVehiclesData] = useState<VehicleData | null>(null);

  const getVehicles = async () => {
    const result = await supabase.from("vehicles").select("*");
    return result;
  };

  type VehicleData = QueryData<ReturnType<typeof getVehicles>>;

  useEffect(() => {
    getVehicles().then((result) => setVehiclesData(result.data));
  }, []);

  return (
    <div className="flex flex-wrap gap-5">
      {vehiclesData?.map((el) => {
        return (
          <CarCard
            brand={el.brand}
            carImg={el.carImg}
            model={el.model}
            gearType={el.gearType}
            vehicleType={el.vehicleType}
            year={el.year.toString()}
            seats={el.seats.toString()}
            pricePerDay={el.pricePerDay.toString()}
            consumption={el.consumption}
          ></CarCard>
        );
      })}
    </div>
  );
}
