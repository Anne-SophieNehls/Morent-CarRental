import { supabase } from "@/lib/supabase";
import { QueryData } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export default function HomePage(){
	const [vehiclesData, setVehiclesData] = useState<VehicleData | null>(null);

	const getVehicles = async () => {
		const result = await supabase.from('vehicles').select('*');
		return result;
	}
	type VehicleData = QueryData<ReturnType<typeof getVehicles>>

	useEffect(() => {
		getVehicles().then((result) => setVehiclesData(result.data))
	},[]);

	console.log(vehiclesData);
    return(
		<div>
			<p className="bg-red-400">Homepage</p>
		</div>
	)
}