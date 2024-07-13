export type Tproduct = {
  _id?: string;
  name: string;
  price: number;
  size: string[];
  rating: number;
  category: string;
  quantity: number;
  description: string;
  brand: string;
  userQuantity?: number;
  images: string[];
  isFeatured: boolean;
};

export type Tresult = {
  success: boolean;
  statusCode: number;
  message: string;
  data: Tproduct[];
};
export type TresultSingle = {
  success: boolean;
  statusCode: number;
  message: string;
  data: Tproduct;
};
export type TqueryObj = {
  category: string;
  maxPrice: number;
  minPrice: number;
  searchTerm: string;
};
