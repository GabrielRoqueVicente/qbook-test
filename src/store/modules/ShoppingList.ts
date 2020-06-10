import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

import {
  ShoppingListArticle,
  setNewShoppingListType,
} from '@/components/ShoppingList/ShoppingListTypes';

@Module({ namespaced: true })
class ShoppingList extends VuexModule {
  public shoppingList: ShoppingListArticle[] | [] = [];

  @Mutation
  public setNewShoppingList(payload: setNewShoppingListType) {
    const { item, index } = payload;
    this.shoppingList[index] = { ...item };
  }

  @Mutation
  public load() {
    const data = localStorage.getItem('distantShoppingList');
    this.shoppingList = data != null ? JSON.parse(data) : [];
  }

  @Mutation
  public addNewItem(item: ShoppingListArticle) {
    this.shoppingList = [...this.shoppingList, item];
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

  @Action({ rawError: true })
  public update(item: ShoppingListArticle, index: number) {
    this.context.commit('setNewShoppingList', { item, index });
    this.context.dispatch('save');
  }

  @Action({ rawError: true })
  public add(item: ShoppingListArticle) {
    this.context.commit('addNewItem', item);
    this.context.dispatch('save');
  }
}

export default ShoppingList;
