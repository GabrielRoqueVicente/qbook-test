<template>
  <div class="Home">
    <InputForm />
    <table v-if="shoppingList.length > 0">
      <thead>
        <tr>
          <th>Quantity</th>
          <th>Product</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, index) in shoppingList">
          <FormBody v-bind:item="item" v-bind:itemIndex="index" v-bind:key="index" />
        </template>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <!-- <input type="number" :value="qty * price" disabled /> -->
        </td>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import InputForm from './InputForm.vue';
import FormBody from './FormBody.vue';
import { ShoppingListArticle } from './ShoppingListTypes';

const shoppingList = namespace('ShoppingList');

@Component({
  components: {
    InputForm,
    FormBody,
  },
})
export default class ShoppingList extends Vue {
  @shoppingList.State
  private shoppingList!: ShoppingListArticle[] | [];

  @shoppingList.Mutation
  private load!: () => void;

  @shoppingList.Action
  private save!: () => void;

  beforeMount() {
    this.load();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
