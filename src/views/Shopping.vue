<template>
  <div>
    <ShoppingList />
  </div>
</template>

<script lang="ts">
import ShoppingList from '@/components/ShoppingList/ShoppingList.vue';

export default {
  name: 'Shopping',
  components: {
    ShoppingList,
  },
};
</script>
