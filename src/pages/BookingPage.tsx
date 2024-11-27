import CarBookedCard from "@/components/CarBookedCard";
import { useUserContext } from "@/context/userContext";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function BookingPage() {
    const [bookingData, setBookingData] = useState<BookingsData | null>(null);
    const [showPastBookings, setShowPastBookings] = useState(false);
    const { user } = useUserContext();

    const getBookingData = async () => {
		console.log(`Hey hey hey ich bin hoffentlich nicht die`, user);
        if (!user) return;
        const result = await supabase
            .from("bookings")
            .select("*, vehicles(*)")
            .eq("user_id", user.id);
        setBookingData(result.data);
		return result.data;
    };
		
    const currentDate = new Date().toISOString().split("T")[0];
    const upcoming = bookingData?.filter((booking) => booking.pick_up_date >= currentDate);
    const past = bookingData?.filter((booking) => booking.pick_up_date < currentDate);
    const upcomingBookings = upcoming?.sort((a, b) => a.pick_up_date.localeCompare(b.pick_up_date));
    const pastBookings = past?.sort((a, b) => b.pick_up_date.localeCompare(a.pick_up_date));
		


    useEffect(() => {
        getBookingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    type BookingsData = Awaited<ReturnType<typeof getBookingData>>;
}
