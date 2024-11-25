import { useParams } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import CarCard from "@/components/CarCard";
import redHeartIcon from "/img/icons/heart-red-icon.svg";


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


export default function FavoritesPage() {
  const { userid } = useParams();
  const [favoritesData, setFavoritesData] = useState<FavoritesData>(null);

  const getFavorites = async () => {
    if (!userid)
      return null;

    const result = await supabase
      .from("favorites")
      .select("*, vehicles(*)")
      .eq("user_id", userid);
      return result.data;
  };

  type FavoritesData = Awaited<ReturnType<typeof getFavorites>>;

  useEffect(() => {
    getFavorites().then((result) => {
      if (result)
      setFavoritesData(result);
    });
  }, [userid]);

  return (
    <div>
      <h1>Your Favorites</h1>
          { favoritesData ? (favoritesData.map((favorite) => (
            <CarCard
              id={favorite.vehicles!.id}
              key={favorite.vehicles!.id}
              brand={favorite.vehicles!.brand}
              carImg={favorite.vehicles!.carImg}
              model={favorite.vehicles!.model}
              gearType={favorite.vehicles!.gearType}
              vehicleType={favorite.vehicles!.vehicleType}
              year={favorite.vehicles!.year.toString()}
              seats={favorite.vehicles!.seats?.toString()}
              pricePerDay={favorite.vehicles!.pricePerDay?.toString()}
              consumption={favorite.vehicles!.consumption}
			  heartIcon={redHeartIcon}
            />
          ))
        ) : (<p>You have no fovorite cars</p>)
      }
    </div>
  );
}
