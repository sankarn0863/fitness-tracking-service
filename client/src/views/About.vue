<template>
  <div class="about">
        <div id="nav">
      <ul>
      
      <li><router-link to="/">Home</router-link></li> 
      <li><router-link to="/login">Login</router-link></li> 
      <li><router-link to="/reg">Register</router-link></li> 
      <li><router-link to="/instruction">Instructor&nbsp;Blog</router-link></li>  
      <li><router-link to="/about">About</router-link></li>
      
     </ul>
    </div>
    <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="../assets/ab.jpg" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="../assets/venudp.jpg" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">Web Server Programming Project</p>
        <p class="subtitle is-6">@Venu Naredla</p>
      </div>
    </div>

    <div class="content">
      This is a Fitness Tracker Project is made by Vue,Node as JS and Html(css as well). Thank You <a>@naredlav1</a>.
      <a href="#">#vue</a> <a href="#">#node</a>
      <br>
      <time datetime="2016-1-1">11:00 PM - 01 Jan 2020</time>
    </div>
  </div>
</div>
  </div>
</template>
<style>
.card{
  position: absolute;
  top: 8%;
  left: 35%;
  right:30%;
  border: dotted;
  border-color:rgba(5, 3, 3, 0.308) ;
  background-color: rgb(0, 0, 0);
  margin: 20px;
}
</style>

