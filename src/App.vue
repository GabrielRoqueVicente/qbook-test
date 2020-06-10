<template>
  <div id="app">
    <div class="Title_container">
      <img class="Title_logo" alt="Vue logo" src="@/assets/logo.png" />
      <h1>Shopping List</h1>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
// Global CSS Rules
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  font-size: 8em;
  color: #204289;
}

table {
  margin: auto;
}

.btn {
  color: #ffffff;
  font-size: 1.25em;
  border-radius: 2em;
  padding: 0.75em 1em;

  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;

  &:focus {
    outline: unset;
  }

  &-success {
    background-color: #42b983;
    border: solid green 3px;
  }
}

//Scoped CSS Rules
.Title {
  &_container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &_logo {
    margin-right: 4em;
    max-height: 10em;
  }
}
</style>
