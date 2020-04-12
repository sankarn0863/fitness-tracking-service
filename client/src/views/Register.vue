<template>
<div class="register">
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
    <img class="ves1" src="../assets/reg.jpg" width="750" height="1400">
    <form class="log">
      <h2>Registration Form</h2>
      <h3 class="v1">Please Enter Your Details</h3>
      <input class="ing" type="text" placeholder="Username">
      <input class="ina" type="email" placeholder="Mail ID">
      <input class="inb" type="text" placeholder="Name">
      <input class="inh" type="number" placeholder="Phone No">
      <input class="inc" type="text" placeholder="City">
      <input class="ind" type="text" placeholder="State">
      <input class="ine" type="text" placeholder="Country">
      <input class="inf" type="text" placeholder="Password">
      <button class="btx1">Register</button>
      </form>
      
    </div>
    </template>
    <style>
     
      .ves1{
        position: fixed;
        top: 26%;
        left: 32%;
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
       .inp{
        position:fixed;
        top: 49%;
        left: 35%;
        font-family: "Roboto", sans-serif;
        font-size:20px;
        border-radius: 10px;
      }
       .ing{
        position: fixed;
        top: 42%;
        left: 35%;
        font-family: "Roboto", sans-serif;
        font-size:16px;
        border-radius: 10px;
      }
       .ina{
        position: fixed;
        top: 42%;
        left: 49%;
        font-family: "Roboto", sans-serif;
        font-size:16px;
        border-radius: 10px;
      }
        .inb{
        position: fixed;
        top: 49%;
        left: 35%;
        font-family: "Roboto", sans-serif;
        font-size:16px;
        border-radius: 10px;
      }
      .inh{
        position: fixed;
        top: 56%;
        left: 35%;
        font-family: "Roboto", sans-serif;
        font-size:16px;
        border-radius: 10px;
      }
        .inc{
        position: fixed;
        top: 63%;
        left: 35%;
        font-family: "Roboto", sans-serif;
        font-size:16px;
        border-radius: 10px;
      }
        .ind{
        position: fixed;
        top: 63%;
        left: 49%;
        font-family: "Roboto", sans-serif;
        font-size:16px;
        border-radius: 10px;
      }
        .ine{
        position: fixed;
        top: 63%;
        left: 63%;
        font-family: "Roboto", sans-serif;
        font-size:16px;
        border-radius: 10px;
      }
        .inf{
        position: fixed;
        top: 70%;
        left: 35%;
        font-family: "Roboto", sans-serif;
        font-size:16px;
        border-radius: 10px;
      }
        .btx1{
        position:fixed;
        top:78%;
        left: 35%;
        font-family: "Roboto", sans-serif;
        font-size: 20px;
        border-style: solid;
        border-color: rgba(255, 255, 255, 0.445);
        border-radius: 10px;
        background-color: rgba(129, 49, 3, 0.884);
      }

    </style>
 