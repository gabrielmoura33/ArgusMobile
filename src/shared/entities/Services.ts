import { Category } from './Category';

export interface Service {
  id: string;
  provider_id: string;
  category_id: string;
  name: string;
  description: string;
  price: number;
  created_at: string;
  updated_at: string;
  serviceAddons: ServiceAddons[];
  category: Category;
}

export interface ServiceAddons {
  id: string;
  name: string;
  description: string;
  price: number;
  min_value: number;
  max_value: number;
  default: boolean;
  selectable: boolean;
  created_at: string;
  updated_at: string;
  type: 'PUBLIC' | 'DURATION' | 'EQUIPMENT' | 'AMBIENT';
}
