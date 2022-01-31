export default interface CategoryInterface {
  id: number;
  type: string;
  title: string;
  url: string;
  description: string;
  icon: string;
  image: string;
  activated: boolean;
  order: number;
  parent_id: number;
  language: string;
  created_at: string;
  updated_at: string;
}
