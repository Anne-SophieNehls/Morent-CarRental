import CarAddOne from "@/components/CarAddOne";
import CarAddTwo from "@/components/CarAddTow";
import CarCard from "@/components/CarCard";
import { supabase } from "@/lib/supabase";
import { QueryData } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/Sidebar";
import { useSearch } from "@/context/searchContext";
import { useFilter } from "@/context/filterContext";
import { useThemeContext } from "@/context/LightDarkModeContext";

export default function HomePage() {
  const { theme } = useThemeContext();
  const [vehiclesData, setVehiclesData] = useState<VehicleData | null>(null);
  const [locationsData, setLocationsData] = useState<LocationsData | null>(
    null
  );
  const { searchFor } = useSearch();

  const {
    filter2Persons,
    filter4Persons,
    filter6Persons,
    filter8OrMorePersons,
    filterCoupe,
    filterSUV,
    filterSedan,
    filterSport,
    filterHatchback,
    filterMPV,
  } = useFilter();

  const getVehicles = async () => {
    const result = await supabase
      .from("vehicles")
      .select("*")
      .ilike("brand", `%${searchFor}%`);
    return result;
  };

  const getLocations = async () => {
    const result = await supabase.from("locations").select("*").single();
    return result;
  };

  type VehicleData = QueryData<ReturnType<typeof getVehicles>>;
  type LocationsData = QueryData<ReturnType<typeof getLocations>>;
  const locationsString = locationsData?.locations?.toString();
  const locationsArray = locationsString?.split(",");

  useEffect(() => {
    getVehicles().then((result) => setVehiclesData(result.data));
    getLocations().then((locations) => setLocationsData(locations.data));
  }, [searchFor]);

  const handleSubmit = () => {};

  return (
    <div className={`bg-[#F6F7F9] flex justify-center ${`theme--${theme}-bg`}`}>
      <Sidebar />
      <div className="flex flex-col w-11/12">
        <div className="flex gap-5 mb-40 justify-around">
          <CarAddOne />
          <CarAddTwo />
        </div>
        <div className="flex justify-around mb-10 items-center">
          <form className="bg-white rounded-lg p-4 shadow-sm">
            <h3>Pickup</h3>
            <div className="flex">
              <div>
                <p>Location:</p>
                <select>
                  <option>Please Select</option>
                  {locationsArray?.map((el, index) => (
                    <option key={index} value={el}>
                      {el}
                    </option>
                  ))}
                  ;
                </select>
              </div>
              <div>
                <p>Date</p>
                <input type="date" />
              </div>
              <div>
                <p>Time</p>
                <input type="time" />
              </div>
            </div>
          </form>
          <Button size={"lg"} className="bg-[#3563E9]">
            ↑↓
          </Button>
          <form className="rounded-lg p-4  bg-white shadow-sm">
            <h3>Drop-Off</h3>
            <div className="flex">
              <div>
                <p>Location:</p>
                <select>
                  <option>Please Select</option>
                  {locationsArray?.map((el) => (
                    <option value={el}>{el}</option>
                  ))}
                  ;
                </select>
              </div>
              <div className="">
                <p>Date</p>
                <input type="date" />
              </div>
              <div>
                <p>Time</p>
                <input type="time" />
              </div>
            </div>
          </form>
        </div>
        <div className="text-right mr-24 mb-5">
          <Button onSubmit={handleSubmit} className="bg-[#3563E9]">
            Filter
          </Button>
        </div>
        <div>
          <div className="flex flex-wrap gap-5 justify-around">
            {vehiclesData?.map((el) => {
              return (
                <CarCard
                  id={el.id}
                  key={el.id}
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
        </div>
      </div>
    </div>
  );
}
