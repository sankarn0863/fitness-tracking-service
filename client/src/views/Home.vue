<template>
  <div class="home">

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
  position: fixed;
  left: 46%;
  top: 15%;
}

</style>