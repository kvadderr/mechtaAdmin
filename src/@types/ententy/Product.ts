import { Category } from "./Category";

export type Product = {
  id: string;
  name: string
  price: number
  value: string
  measurement: string
	category_id: string
  category: Category
}