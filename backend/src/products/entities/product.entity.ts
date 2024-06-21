export class ProductEntity {
  Id: string;
  name: string;
  sku: string;
  price: number;
  urlName: string;
  description: string;
  attachments: string[];
  stock: number;
  weight: number;
  minimumOrder: number;
  isActive: boolean;
  length?: number;
  width?: number;
  height?: number;
  categoriesId: string;
  categories?: object;
}
