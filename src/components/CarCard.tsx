import tankIcon from "../assets/img/consumption.png";
import typeIcon from "../assets/img/type.png";
import seatsIcon from "../assets/img/seats.png";
import { Button } from "./ui/button";

interface CarCardProps {
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

export default function CarCard(props: CarCardProps){
	return (
		<div className="w-1/5 p-3 bg-slate-200 rounded-lg">
			<div className="flex justify-between">
				<h2 className="font-bold">{`${props.brand} ${props.model}`}</h2>
				<div>❤️</div>
			</div>
			<p className="text-xs font-semibold text-[]">{props.vehicleType}</p>
			<img className="rounded-xl" src={props.carImg} alt="Car Image" />
			<div className="flex justify-between">
				<div className="flex">
					<img src={tankIcon} alt="" />
					<p className="text-[#6C757D] font-light text-sm self-center">{props.consumption}</p>
				</div>
				<div className="flex">
					<img src={typeIcon} alt="" />
					<p className="text-[#6C757D] font-light text-sm self-center">{props.gearType}</p>
				</div>
				<div className="flex">
					<img src={seatsIcon} alt="" />
					<p className="text-[#6C757D] font-light text-sm self-center">{props.seats}</p>
				</div>
			</div>
			<div className="flex justify-between">
				<h2 className="font-bold">{`${props.pricePerDay}/`}<span className="text-xs text-[#90A3BF]">day</span></h2>
				<Button className="bg-[#3563E9]">Rent now</Button>
			</div>
		</div>
	)
}