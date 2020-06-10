export type ShoppingListArticle = {
  qty: number;
  product: string;
  price: number;
};

export type setNewShoppingListType = {
  item: ShoppingListArticle;
  index: number;
};
