import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';

import {
  ShoppingListArticle,
  setNewShoppingListType,
} from '@/components/ShoppingList/ShoppingListTypes';

@Module({ namespaced: true })
class ShoppingList extends VuexModule {
  public shoppingList: ShoppingListArticle[] | [] = [];

  get getTotalPrice(): number {
    const reducer = (acc: number, curr: ShoppingListArticle) => acc + curr.price * curr.qty;
    const data = [...this.shoppingList];
    console.log(data.reduce(reducer, 0));
    return data.reduce(reducer, 0);
  }

  @Mutation
  public setNewShoppingList(payload: setNewShoppingListType) {
    const { item, index } = payload;
    const newItem = [...this.shoppingList];
    newItem[index] = item;
    console.log(newItem);
    this.shoppingList = newItem;
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
  public deleteItem(index: number) {
    const newList = [...this.shoppingList];
    newList.splice(index, 1);
    this.shoppingList = newList;
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
  public update(payload: setNewShoppingListType) {
    this.context.commit('setNewShoppingList', payload);
    this.context.dispatch('save');
  }

  @Action
  public add(item: ShoppingListArticle) {
    this.context.commit('addNewItem', item);
    this.context.dispatch('save');
  }

  @Action
  public delete(key: number) {
    this.context.commit('deleteItem', key);
    this.context.dispatch('save');
  }
}

export default ShoppingList;
