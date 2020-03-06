<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> | 
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/instruction">Instruction</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:center;
  color: #000000;
}

#nav {
  padding: 20px;

  a {
    font-weight: bold;
    color:black;

    &.router-link-exact-active {
      color:rgb(177, 177, 43);
    }
  }
  text-decoration: none;
  a:hover{
    position: relative;
    font-size: 20px;
  }
}
</style>
