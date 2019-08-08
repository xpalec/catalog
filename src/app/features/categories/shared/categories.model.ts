export interface category {
  id: string;
  name: string;
  description: string;
  images: string[];
  tags: string[];
  favorite: boolean;
  price: string;
  data: any[];
}

interface otherField {
  key: string;
  name: string;
  type: string;
  value: string;
  options: string;
}