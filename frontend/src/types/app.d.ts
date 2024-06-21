interface IUser {
  Id: string;
  username: string;
  fullname: string;
  email: string;
  role: string;
}

interface IProduct {
  Id: string;
  name: string;
  sku: string;
  price: number;
  quantity: number; //  temporary
  urlName: string;
  description: string;
  attachments: string[];
  stock: number;
  weight: number;
  minimumOrder: number;
  isActive: boolean;
  length: number;
  width: number;
  height: number;
  categoriesId: string;
  mainCategoriesId: string;
  storeId: string;
  [key: string]: any;
}

interface ICategory {
  Id: string;
  name: string;
  parentId?: string;
  subcategories?: ICategory[];
}

interface ICartItems {
  Id: string;
  userId: string;
  cardsId?: string;
  name: string;
  price: number;
  attachments: string;
  quantity: number;
}

interface ICards {
  Id: string;
  userId: string;
  prices: number;
  discount: number;
  cartItems: ICartItems[];
}
