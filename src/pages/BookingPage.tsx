import CarBookedCard from "@/components/CarBookedCard";

export default function BookingPage(){
    return (
		<section>
			<h2 className="text-3xl font-semibold border-b-2 pb-7 border-black">My Bookings</h2>
			<div>
				<p>Upcoming</p>
				<p>History</p>
			</div>
			<CarBookedCard/>
		</section>
    )
}