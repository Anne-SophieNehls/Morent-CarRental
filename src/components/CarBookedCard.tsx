import svg from "../assets/svg/SVG (3).png"
import Map from "@/components/Map";

interface CarBookedCard {
	id: string,
	vehicle: {
		id: string;
		brand: string;
		carImg: string;
		model: string;
		vehicleType: string;
		year: number;
		pricePerDay: number;
		seats: number;
		consumption: string;
		gearType: string;
  	};
	user_id: string;
	pick_up_location: string;
	pick_up_date: string;
	drop_off_location: string;
	drop_off_date: string;
}

export default function CarBookedCard(props: CarBookedCard){

	const days = 2;

	return (
		<div className="w-11/12 mb-10">
			<p className="text-xl font-semibold mb-5 mt-7">{props.pick_up_date}</p>
			<div className="bg-white rounded-lg shadow-sm">
				<div className="flex border-b  p-7">
					<img className="w-1/6 rounded-md" src={props.vehicle.carImg} alt="" />
					<div className="ml-4">
						<p className="text-xl">{`${props.vehicle.brand} ${props.vehicle.model}`}</p>
						<p className="text-[#90A3BF]">{`${props.pick_up_date} - ${props.drop_off_date}`}</p>
						<p className="text-xl">{`$ ${props.vehicle.pricePerDay * days}`}</p>
					</div>
				</div>
				<div>
					<div className="flex">
						<div>
							<img src={svg} alt="" />
						</div>
						<div>
							<p className="text-xl text-[#6C757D]">{props.pick_up_location}</p>
							<p className="text-xl text-[#6C757D]">{props.drop_off_location}</p>
						</div>
						<div></div>
					</div>
					<Map></Map>
				</div>
			</div>
		</div>
	)
}