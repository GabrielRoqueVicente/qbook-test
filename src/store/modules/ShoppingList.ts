import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

import { ShoppingListArticle } from '@/components/ShoppingList/ShoppingListTypes';

@Module({ namespaced: true })
class ShoppingList extends VuexModule {
  public shoppingList: ShoppingListArticle[] | [] = [];

  @Mutation
  public mutate(item: ShoppingListArticle, index: number) {
    this.shoppingList[index] = { ...item };
  }

  @Mutation
  public load() {
    const data = localStorage.getItem('distantShoppingList');
    this.shoppingList = data != null ? JSON.parse(data) : [];
  }

  @Mutation
  public add(article: any) {
    this.shoppingList = [...this.shoppingList, article];
  }

  @Mutation
  public delete(key: number) {
    const newList = [...this.shoppingList];
    this.shoppingList = newList.splice(key, 1);
  }

  @Mutation
  public edit(payload: { key: number; article: ShoppingListArticle }) {
    const { key, article } = payload;
    const newList = [...this.shoppingList];
    this.shoppingList = newList.splice(key, 1, article);
  }

  @Action
  public save() {
    localStorage.setItem('distantShoppingList', JSON.stringify(this.shoppingList));
  }

  @Action
  public update(item: ShoppingListArticle, index: number) {
    this.mutate(item, index);
    this.save();
  }
}

export default ShoppingList;
