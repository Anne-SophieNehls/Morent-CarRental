import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { QueryData } from "@supabase/supabase-js";
import { useEffect, useState } from "react";


export default function DetailsPage() {
  const { id } = useParams();
  const [car, setCar] = useState<CarData | null>(null);

  const getCar = async (id: string) => {
    const result = await supabase
      .from("vehicles")
      .select("*")
      .eq("id", id)
      .single();
    return result;
  };
  type CarData = QueryData<ReturnType<typeof getCar>>;

  useEffect(() => {
    if (id) {
      getCar(id).then((result) => setCar(result.data));
    }
  }, []);

  if (!car) {
    return "Loading...?";
  }

    </div>
    );
}