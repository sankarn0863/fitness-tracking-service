<template>
<div class="login" @submit.prevent="login">
    {{error}}
    <div id="nav">
      <ul>
      
      <li><router-link to="/">Home</router-link></li> 
      <li><router-link to="/login">Login</router-link></li> 
      <li><router-link to="/reg">Register</router-link></li> 
      <li><router-link to="/instruction">Instructor&nbsp;Blog</router-link></li>  
      <li><router-link to="/about">About</router-link></li>
      
     </ul>
    </div>
     <img class="pic" src="../views/login.jpg" width="550px" height="auto">
    <div class="venus">
    <form class="log">
      <h2>Login Form</h2>
      <h3 class="v1">Please Enter Your Login Credentials below</h3>
      <input class="in" type="text" placeholder="Username" required="required" v-model="username">
      <input class="inp" type="text" placeholder="Password" required="required" v-model="password">
      <button class="btx">Login</button>
      </form>
      <p class="vent">Register now for the Sign In <router-link to="/click">Click Here</router-link></p> 
      </div>
     
    </div>
    </template>
    <style>
       .vent{
        position: fixed;
        top: 65%;
        left: 35%;
      }
      .log{
        position: fixed;
        top: 27%;
        left: 35%;
        font-family: "Roboto", sans-serif;
        font-size: 30px;
      }
      .v1{
        position: fixed;
        top: 37%;
        font-size: 16px;
      }
      .in{
        position: fixed;
        top: 42%;
        left: 35%;
        font-family: "Roboto", sans-serif;
        font-size:20px;
        border-radius: 10px;
      }
       .inp{
        position:fixed;
        top: 49%;
        left: 35%;
        font-family: "Roboto", sans-serif;
        font-size:20px;
        border-radius: 10px;
      }
      .pic{
        position:fixed;
        top: 20%;
        left: 34%;
      }

       .btx{
        position:fixed;
        top: 57%;
        left: 35%;
        font-family: "Roboto", sans-serif;
        font-size: 20px;
        border-style: solid;
        border-color: rgba(255, 255, 255, 0.445);
        border-radius: 10px;
        background-color: rgba(129, 49, 3, 0.884);
      }



    </style>
    <script>
    import { Login } from "../models/Users";
    import { Admin_Login } from "../models/Users";
    export default {
      data(){
       return {
          username: '',
          password: '',
          error: ''
         }
       },
      methods: {
        login(){
            try {
                Login(this.username, this.password);
                this.$router.push('/dash');
            } catch (error) {
                  this.error = error;
            }
            try {
                Admin_Login(this.username, this.password);
                this.$router.push('/Admin');
            } catch (error) {
                  this.error = error;
            }
        }   
    }
}
</script>
