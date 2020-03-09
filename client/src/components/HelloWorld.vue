<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Naredlav1 is designed to help you learn more so you can achieve more.<br />
       It goes beyond tracking steps and calories to offer actionable insights on everything from your running style to your heart rate
    </p>
    <h3>A Design by Venu naredla</h3>
        <ul>
      <li>
        <a
          href="https://github.com/venu-naredla/PROJECT"
          target="_blank"
          rel="noopener"
          >Blog</a
        >
      </li>
      <li>
        <a
          href="https://github.com/venu-naredla/PROJECT"
          target="_blank"
          rel="noopener"
          >Contact</a
        >
      </li>
      <li>
        <a
          href="https://github.com/venu-naredla/PROJECT"
          target="_blank"
          rel="noopener"
          >Service</a
        >
      </li>
      <li>
        <a
          href="https://github.com/venu-naredla/PROJECT"
          target="_blank"
          rel="noopener"
          >Info</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
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
  top: 65%;
  left: 44%;
}
ul {
  list-style-type: none;
  padding: 0;
  position: fixed;
  top: 73%;
  left:43.5%
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration: none;
  color:rgb(255, 255, 255);
}
hello{
  position:absolute;
  top: 60%;
}
</style>
