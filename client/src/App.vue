<template>
  <div id="app">
    <div id="nav">
      <ul>
      
      <li><router-link to="/">Home</router-link></li> 
      <li><router-link to="/login">Sign&nbsp;up/Login</router-link></li> 
      <li><router-link to="/instruction">Instruction</router-link></li>  
      <li><router-link to="/about">About</router-link></li>
      
     </ul>
    </div>
    <router-view />

    </div>
</template>

<style lang="scss">

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 7px;
}
#app {
 
  position:absolute;
  top: 12%;
  left: 22%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:center;
  color:white;
}

#nav {
  position:fixed;
  padding: 10px;
  bottom: 92%;
  left:39%;

  a {
    text-decoration: none;
    font-weight: bold;
    color:white;

    &.router-link-exact-active {
      color:rgb(223, 90, 1);
    }
  }
  text-decoration: none;
  a:hover{
    position:relative;
    font-size: 24px;
    color:rgb(223, 90, 1);
  }
}
</style>
