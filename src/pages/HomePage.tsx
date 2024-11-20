import CarAddOne from "@/components/CarAddOne";
import CarAddTwo from "@/components/CarAddTow";
import CarCard from "@/components/CarCard";
import { supabase } from "@/lib/supabase";
import { QueryData } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export default function HomePage(){
	const [vehiclesData, setVehiclesData] = useState<VehicleData | null>(null);
	const [locationsData, setLocationsData] = useState<LocationsData | null>(null);


  const getVehicles = async () => {
    const result = await supabase.from("vehicles").select("*");
    return result;
  };

	const getLocations = async () => {
		const result = await supabase.from('locations').select('*').single();
		return result;
	  };
	  

	type VehicleData = QueryData<ReturnType<typeof getVehicles>>;
	type LocationsData = QueryData<ReturnType<typeof getLocations>>;

	useEffect(() => {
		getVehicles().then((result) => setVehiclesData(result.data));
		getLocations().then((locations ) => setLocationsData(locations.data));
	},[]);
 
	const locationsString = locationsData?.locations?.toString();
	const locationsArray = locationsString?.split(',');

    return(
			<div className="bg-[#F6F7F9]">
				<div className="flex gap-5 justify-center mb-40">
					<CarAddOne></CarAddOne>
					<CarAddTwo></CarAddTwo>
				</div>
				<div className="flex justify-around">
					<div>
						<h3>Pickup</h3>
						<div className="flex">
							<div>
								<p>Location:</p>
								<select>
									<option>Please Select</option>
									{locationsArray?.map((el) => <option value={el}>{el}</option>)};
								</select>
							</div>
							<div>
								<p>Date</p>
								<input type="date" />
							</div>
						</div>
					</div>
					<div>
						<h3>Drop-Off</h3>
							<div className="flex">
								<div>
									<p>Location:</p>
									<select>
										<option>Please Select</option>
										{locationsArray?.map((el) => <option value={el}>{el}</option>)};
									</select>
								</div>
								<div>
									<p>Date</p>
									<input type="date" />
								</div>
							</div>
					</div>
				</div>
				<div>
					<div className="flex flex-wrap gap-5 justify-center">
					{vehiclesData?.map((el) => {
						return <CarCard
							key={el.id}
							brand={el.brand} carImg={el.carImg} 
							model={el.model} gearType={el.gearType} 
							vehicleType={el.vehicleType} 
							year={el.year.toString()} 
							seats={el.seats.toString()} 
							pricePerDay={el.pricePerDay.toString()} 
							consumption={el.consumption}>
						</CarCard>
					})}
					</div>
				</div>
			</div>
		)
}
