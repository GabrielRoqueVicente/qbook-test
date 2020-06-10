<template>
  <form id="inputForm" @submit.prevent="handleSubmit">
    <table>
      <thead>
        <tr>
          <th>Quantity</th>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <template>
          <tr v-bind:key="index">
            <td>
              <input type="number" id="inQuantity" v-model.number="qty" min="1" />
            </td>
            <td>
              <input type="string" id="inProduct" v-model="product" required />
            </td>
            <td>
              <input type="number" id="inPrice" v-model.number="price" step="0.01" min="0.01" />
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <button class="btn btn-success" type="submit" value="Submit">Add Item</button>
  </form>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import { ShoppingListArticle } from './ShoppingListTypes';

const INITIAL_VALUES = {
  qty: 1,
  product: '',
  price: 1,
};

const shoppingList = namespace('ShoppingList');
@Component
export default class InputForm extends Vue {
  private qty = INITIAL_VALUES.qty;
  private product = INITIAL_VALUES.product;
  private price = INITIAL_VALUES.price;
  private index = '';

  @shoppingList.Mutation
  private add!: (article: ShoppingListArticle) => void;

  resetState() {
    this.qty = INITIAL_VALUES.qty;
    this.product = INITIAL_VALUES.product;
    this.price = INITIAL_VALUES.price;
  }

  handleSubmit() {
    const newArticle = {
      qty: this.qty,
      product: this.product,
      price: this.price,
      computedPrice: '0',
    };
    this.add(newArticle);
    this.resetState();
  }
}
</script>
