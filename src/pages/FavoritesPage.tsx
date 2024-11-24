import { useParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import CarCard from "@/components/CarCard";
import { QueryData } from "@supabase/supabase-js";

type Vehicle = {
  id: string;
  brand: string;
  model: string;
  year: number;
  carImg: string;
  gearType: string;
  vehicleType: string;
  seats: number;
  pricePerDay: number;
  consumption: string;
};

type Favorite = {
  id: number;
  user_id: string;
  vehicle_id: Vehicle;
};


export default function FavoritesPage() {
  const { userid } = useParams();
  const [favoritesData, setFavoritesData] = useState<FavoritesData | null>(null);

  const getFavorites = async () => {
    if (!userid)
      return null;

    const result = await supabase
      .from("favorites")
      .select("*, vehicle_id(*)")
      .eq("user_id", userid);

      return result;
  };

  type FavoritesData = QueryData<ReturnType<typeof getFavorites>>;

  useEffect(() => {
    getFavorites().then((result) => {
      if (result?.data)
      setFavoritesData(result.data);
    });
  }, [userid]);

  return (
    <div>
      <h1>Your Favorites</h1>
          { favoritesData ? (favoritesData.map((favorite: Favorite) => (
            <CarCard
              id={favorite.vehicle_id.id}
              key={favorite.vehicle_id.id}
              brand={favorite.vehicle_id.brand}
              carImg={favorite.vehicle_id.carImg}
              model={favorite.vehicle_id.model}
              gearType={favorite.vehicle_id.gearType}
              vehicleType={favorite.vehicle_id.vehicleType}
              year={favorite.vehicle_id.year.toString()}
              seats={favorite.vehicle_id.seats?.toString()}
              pricePerDay={favorite.vehicle_id.pricePerDay?.toString()}
              consumption={favorite.vehicle_id.consumption}
            />
          ))
        ) : (<p>Loading favorites...</p>)
      }
    </div>
  );
}
