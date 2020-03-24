<template>
<div>
    <div id="nav">
      <ul>
      
      <li><router-link to="/">Home</router-link></li> 
      <li><router-link to="/login">Sign&nbsp;up/Login</router-link></li> 
      <li><router-link to="/instruction">Instructor&nbsp;Blog</router-link></li>  
      <li><router-link to="/about">About</router-link></li>
      
     </ul>
    </div>
  <article>
    <div class="container" :class="{ 'sign-up-active': signUp }">
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-left">
            <h2>Hello USER!</h2>
            <p>Please login with your personal info</p>
            <button class="invert" id="signIn" @click="signUp = !signUp">
              Sign In
            </button>
          </div>
          <div class="overlay-right">
            <h2>Welcome Back!</h2>
            <p>Please enter your personal details</p>
            <button class="invert" id="signUp" @click="signUp = !signUp">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <form class="sign-up" action="#">
        <h2>SIGN UP for NaredlaV1</h2>
        <div>Use your Email ID for registration</div>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Age" />
        <input type="text" placeholder="Sex" />
        <input type="password" placeholder="Password" />

        <button>Sign up</button>
      </form>
      <form class="sign-in" action="#">
        <h2>SIGN IN</h2>
        <div>Use your account</div>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a>Forgot your password?</a>
        <router-link to="/dash"><button>Sign in</button></router-link>
      </form>
    </div>
  </article>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      signUp: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
article {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  font-size: 16px;
  padding-top:6% ;
  padding-left: 20%;
}
.container {
  position: relative;
  width: 768px;
  height: 480px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  background-color:transparent;;
  .overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    z-index: 100;
  }
  .overlay {
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    background-image: url(vlog.jpg);
    background-size: cover;
    color: rgba(253, 253, 253, 0);
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
  }
  @mixin overlays($property) {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 70px 40px;
    width: calc(50% - 80px);
    height: calc(100% - 140px);
    text-align: center;
    transform: translateX($property);
    transition: transform 0.5s ease-in-out;
  }
  .overlay-left {
    @include overlays(-20%);
  }
  .overlay-right {
    @include overlays(0);
    right: 0;
  }
}
h2 {
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-size: 25px;
}
p {
  margin: 20px 0 30px;
}
a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  margin: 15px 0;
  font-size: 1rem;
}
button {
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0);
  background-color: rgb(245, 94, 7);
  color: rgb(12, 12, 12);
  font-size: 1rem;
  font-weight: bold;
  font-family:'Roboto', sans-serif;
  padding: 10px 40px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: transform 0.1s ease-in;
  &:active {
    transform: scale(0.9);
  }
  &:focus {
    outline: none;
  }
}
button.invert {
  position: absolute;
  top: 96%;
  background-color: rgb(252, 77, 8);
  border-color: rgb(253, 77, 7);
}
form {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding: 90px 60px;
  width: calc(65.6% - 120px);
  height: calc(100% - 0px);
  text-align: center;
  background: linear-gradient(to bottom, #fff7f7, rgb(117, 111, 111));
  transition: all 0.5s ease-in-out;
  div {
    font-size: 1rem;
  }
  input {
    background-color: rgba(255, 255, 255, 0.836);
    border: solid;
    padding: 8px 15px;
    margin: 6px 0;
    width: calc(100% - 30px);
    border-radius: 15px;
    border-bottom: 1px solid rgb(10, 10, 10);
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px rgb(5, 5, 5),
      0 1px 0 rgb(10, 9, 9);
    overflow: hidden;
    &:focus {
      outline: none;
      background-color: transparent;
    }
  }
}
.sign-in {
  left: 0;
  z-index: 2;
}
.sign-up {
  left: 0;
  top: -5%;
  z-index: 1;
  opacity: 0;
}
.sign-up-active {
  .sign-in {
    transform: translateX(100%);
  }
  .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.5s;
  }
  .overlay-container {
    transform: translateX(-100%);
  }
  .overlay {
    transform: translateX(50%);
  }
  .overlay-left {
    transform: translateX(0);
  }
  .overlay-right {
    transform: translateX(20%);
  }
}
@keyframes show {
  0% {
    opacity: 0;
    z-index: 1;
  }
  49% {
    opacity: 0;
    z-index: 1;
  }
  50% {
    opacity: 1;
    z-index: 10;
  }
}
</style>
