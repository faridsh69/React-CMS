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
  image: string;
  video: string;
  activated: boolean;
  category_id: number;
  tags: string;
  relateds: any;
  language: string;
  created_at: string;
  updated_at: string;
}
