export interface Category {
  alias: string;
  title: string;
}

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Location {
  address1: string;
  address2: string | null;
  address3: string | null;
  city: string;
  zip_code: string;
  country: string;
  state: string;
  display_address: string[];
}

export interface Business {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_closed: boolean;
  url: string;
  review_count: number;
  categories: Category[];
  rating: number;
  coordinates: Coordinates;
  transactions: string[]; // You might want to replace this with a more specific type if needed
  price: string;
  location: Location;
  phone: string;
  display_phone: string;
  distance: number;
}

export interface BusinessesResponse {
  businesses: Business[];
  total: number;
  region: {
    center: Coordinates;
  };
}
