<template>
  <div id="app">

    <router-view />
    </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
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
  top: 5%;
   right:1%;
   left: 1%;
   bottom: 1%;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:center;
  color:white;
 

}
#nav {
  position:absolute;
  padding: 10px;
  bottom: 94%;
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