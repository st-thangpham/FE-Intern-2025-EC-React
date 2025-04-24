export interface Product {
  id: string;
  title: string;
  image: string;
  type: string;
  size: string;
  price: number;
  stock: number;
  bonus: string;
}

export interface CartItemType {
  product: Product;
  quantity: number;
}
