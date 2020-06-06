<template>
  <div class="Home">
    <button
      class="btn btn-sucess"
      @click="$router.push('shoppingList')"
    >
      Get Started
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home',
};
</script>
