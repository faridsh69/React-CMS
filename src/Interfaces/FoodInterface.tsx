import CategoryInterface from "./CategoryInterface";
import TagInterface from "./TagInterface";

export default interface FoodInterface {
  id: number;
  title: string;
  url: string;
  description: string;
  price: number;
  discount_price: number;
  calorie: number;
  properties: string;
  content: string;
  activated: boolean;
  language: string;
  created_at: string;
  updated_at: string;
  image: string;
  video: string;
  category_id: number;
  tags: TagInterface[];
  relateds: FoodInterface[];
  category: CategoryInterface;
}
