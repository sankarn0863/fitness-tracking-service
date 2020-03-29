<template>
  <div class="home">
        <div id="nav">
      <ul>
      
      <li><router-link to="/">Home</router-link></li> 
      <li><router-link to="/login">Sign&nbsp;up/Login</router-link></li> 
      <li><router-link to="/instruction">Instructor&nbsp;Blog</router-link></li>  
      <li><router-link to="/about">About</router-link></li>
      
     </ul>
    </div>

    <img class="ve" src="../assets/logo.png"  width="185" height="auto">
    <HelloWorld msg="Welcome to Naredlav1 Fitness Tracker App" />

  </div>

</template>
<script>


import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "Home",
  components:
   {
    HelloWorld
  }
};
</script>
<style>
.ve{
  position: absolute;
  left: 46%;
  top: 15%;
}

</style>