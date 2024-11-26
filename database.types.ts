export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: {
          drop_off_date: string
          drop_off_location: string
          id: string
          pick_up_date: string
          pick_up_location: string
          user_id: string
          vehicle_id: string
        }
        Insert: {
          drop_off_date: string
          drop_off_location: string
          id?: string
          pick_up_date: string
          pick_up_location: string
          user_id: string
          vehicle_id: string
        }
        Update: {
          drop_off_date?: string
          drop_off_location?: string
          id?: string
          pick_up_date?: string
          pick_up_location?: string
          user_id?: string
          vehicle_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookings_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      favorites: {
        Row: {
          created_at: string
          id: number
          user_id: string
          vehicle_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          user_id: string
          vehicle_id: string
        }
        Update: {
          created_at?: string
          id?: number
          user_id?: string
          vehicle_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "favorites_vehicle_id_fkey"
            columns: ["vehicle_id"]
            isOneToOne: false
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          },
        ]
      }
      locations: {
        Row: {
          created_at: string | null
          id: string
          locations: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          locations?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          locations?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          favorites: string | null
          first_name: string
          id: string
          image_url: string | null
          last_name: string
        }
        Insert: {
          favorites?: string | null
          first_name: string
          id: string
          image_url?: string | null
          last_name: string
        }
        Update: {
          favorites?: string | null
          first_name?: string
          id?: string
          image_url?: string | null
          last_name?: string
        }
        Relationships: []
      }
      reviews: {
        Row: {
          created_at: string
          date: string
          id: string
          name: string
          stars: number
          text: string
          user_id: string | null
          vehicleID: string
        }
        Insert: {
          created_at: string
          date: string
          id?: string
          name: string
          stars: number
          text: string
          user_id?: string | null
          vehicleID: string
        }
        Update: {
          created_at?: string
          date?: string
          id?: string
          name?: string
          stars?: number
          text?: string
          user_id?: string | null
          vehicleID?: string
        }
        Relationships: []
      }
      vehicles: {
        Row: {
          availability: boolean
          brand: string
          carImg: string
          colors: string
          consumption: string
          created_at: string
          electricVehicle: boolean
          fuel: string
          gearType: string
          horstpower: string
          id: string
          locations: string
          luggage: number
          model: string
          pricePerDay: number
          ps: number
          seats: number
          vehicleID: string
          vehicleType: string
          year: number
        }
        Insert: {
          availability: boolean
          brand: string
          carImg: string
          colors: string
          consumption: string
          created_at: string
          electricVehicle: boolean
          fuel: string
          gearType: string
          horstpower: string
          id?: string
          locations: string
          luggage: number
          model: string
          pricePerDay: number
          ps: number
          seats: number
          vehicleID: string
          vehicleType: string
          year: number
        }
        Update: {
          availability?: boolean
          brand?: string
          carImg?: string
          colors?: string
          consumption?: string
          created_at?: string
          electricVehicle?: boolean
          fuel?: string
          gearType?: string
          horstpower?: string
          id?: string
          locations?: string
          luggage?: number
          model?: string
          pricePerDay?: number
          ps?: number
          seats?: number
          vehicleID?: string
          vehicleType?: string
          year?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
