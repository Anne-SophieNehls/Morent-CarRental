import CarBookedCard from "@/components/CarBookedCard";
import { useUserContext } from "@/context/userContext";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function BookingPage() {
    const [bookingData, setBookingData] = useState<BookingsData | null>(null);
    const [showPastBookings, setShowPastBookings] = useState(false);
    const [pastBookings, setPastBookings] = useState<BookingsData | null>(null);
    const [upcomingBookings, setUpcomingBookings] = useState<BookingsData | null>(null);
    const { user } = useUserContext();

    const getBookingData = async () => {
        if (!user) return;
        const result = await supabase
            .from("bookings")
            .select("*, vehicles(*)")
            .eq("user_id", user.id);
        setBookingData(result.data);
		return result.data;
    };

    const sortBookings = () => {
        if (!bookingData) return;
		
        const currentDate = new Date().toISOString().split("T")[0];
        const upcoming = bookingData.filter((booking) => booking.pick_up_date >= currentDate);
        const past = bookingData.filter((booking) => booking.pick_up_date < currentDate);
        const sortedUpcoming = upcoming.sort((a, b) => a.pick_up_date.localeCompare(b.pick_up_date));
        const sortedPast = past.sort((a, b) => b.pick_up_date.localeCompare(a.pick_up_date));
        setUpcomingBookings(sortedUpcoming);
        setPastBookings(sortedPast);
    };

    useEffect(() => {
        getBookingData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        sortBookings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    type BookingsData = Awaited<ReturnType<typeof getBookingData>>;
}
