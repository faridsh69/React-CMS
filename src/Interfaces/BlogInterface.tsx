export default interface BlogInterface {
  id: number;
  title: string;
  url: string;
  description: string;
  content: string;
  image: string;
  activated: boolean;
  google_index: boolean;
  canonical_url?: string;
  category_id: number;
  language: string;
  created_at: string;
  updated_at: string;
}
