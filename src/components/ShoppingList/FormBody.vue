<template>
  <tr v-bind:key="index">
    <td>
      <input type="number" v-model.number="qty" min="1" />
    </td>
    <td>
      <input type="string" v-model="product" required />
    </td>
    <td>
      <input type="number" v-model.number="price" step="0.01" />
    </td>
    <td>
      <input type="number" :value="qty * price" step="0.01" min="0.01" disabled />
    </td>
  </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import { ShoppingListArticle, setNewShoppingListType } from './ShoppingListTypes';

const shoppingList = namespace('ShoppingList');

@Component
export default class ShoppingList extends Vue {
  @Prop() readonly item!: ShoppingListArticle;
  @Prop() readonly itemIndex!: number;

  get index(): number {
    return this.itemIndex;
  }

  get qty(): number {
    return this.item.qty;
  }

  set qty(newValue: number) {
    const newItem = { ...this.item };
    newItem.qty = newValue;
    this.update({ item: newItem, index: this.index });
  }

  get product(): string {
    return this.item.product;
  }

  set product(newValue: string) {
    const newItem = { ...this.item };
    newItem.product = newValue;
    this.update({ item: newItem, index: this.index });
  }

  get price(): number {
    return this.item.price;
  }

  set price(newValue: number) {
    const newItem = { ...this.item };
    newItem.price = newValue;
    this.update({ item: newItem, index: this.index });
  }

  @shoppingList.Action
  private save!: () => void;

  @shoppingList.Action
  private update!: (arg1: setNewShoppingListType) => void;
}
</script>
