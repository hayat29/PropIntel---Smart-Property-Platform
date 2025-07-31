export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  type: 'rent' | 'sale';
  bhk: number;
  bathrooms: number;
  area: number;
  furnished: 'Furnished' | 'Semi-Furnished' | 'Unfurnished';
  image: string;
  featured: boolean;
  verified: boolean;
}