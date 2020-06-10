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
          <tr v-bind:key="index">
            <td>
              <input type="number" v-model.number="item.qty" min="1" />
            </td>
            <td>
              <input type="string" v-model="item.product" required />
            </td>
            <td>
              <input type="number" v-model.number="item.price" step="0.01" />
            </td>
            <td>
              <input type="number" :value="item.qty * item.price" step="0.01" min="0.01" disabled />
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import InputForm from './InputForm.vue';
import { ShoppingListArticle } from './ShoppingListTypes';

const shoppingList = namespace('ShoppingList');

@Component({
  components: {
    InputForm,
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
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
