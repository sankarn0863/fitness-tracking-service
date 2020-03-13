<template>
  <div class="hello">
    <h1 class="venu">{{ msg }}</h1>
    <p>
      Naredlav1 is designed to help you learn more so you can achieve more.<br />
       It goes beyond tracking steps and calories to offer actionable insights on everything from your running style to your heart rate
    </p>
    <h3>A Design by Venu naredla</h3>
        <ul>
      <li>
        <a
          href="https://mail.google.com/"
          target="_blank"
          rel="noopener"
          > <i class="fa fa-envelope"></i>&nbsp;Mail</a
        >
      </li>
      <li>
        <a
          href="https://github.com/venu-naredla/PROJECT"
          target="_blank"
          rel="noopener"
          > <i class="fa fa-grav"></i>&nbsp;GitHub</a
        >
      </li>
      <li>
        <a
          href="https://github.com/venu-naredla/PROJECT/blob/fitnessapp/README.md"
          target="_blank"
          rel="noopener"
          ><i class="fa fa-address-book"></i>&nbsp;Contact</a
        >
      </li>
      <li>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener"
          ><i class="fa fa-globe"></i>&nbsp;Blog</a
        >
      </li>
    </ul>
  </div>
</template>

<script >
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};





</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
  position: fixed;
  top: 66%;
  left: 46%;
  font-size: 16px;
}
ul {
  list-style-type: none;
  padding: 0;
  position: fixed;
  top:75%;
  left:40%
}
li {
  display: inline-block;
  margin: 0 15px;
}
a {
  position: relative;
  text-decoration: none;
  color:rgb(255, 255, 255);
  right: 11%;
  font-size: 16px;
}
hello{
  position:absolute;
  top: 60%;
}

p{
  position: fixed;
  top: 55%;
  font-size: 17px;
  left: 23%;
}
.venu{
   position: fixed;
  top: 46%;
  font-size: 38px;
  left: 28%;

}

</style>
