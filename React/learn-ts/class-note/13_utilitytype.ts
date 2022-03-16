interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

function fetchProducts(): Promise<Product[]> {}

type shoppingItem = Omit<Product, "price" | "stock">;
function displayProductDetail(
  shoppingItem: Pick<Product, "id" | "name" | "price">
) {}

function updateProduct(productItem: Partial<Product>) {}
