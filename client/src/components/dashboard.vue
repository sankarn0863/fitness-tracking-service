<template>
<section class="nav>">
    <div class="tabs is-right">
  <ul>
    <li><a>Friends</a></li>
    <li><a>Search</a></li>
    <li><a>Request</a></li>
    <li class="is-active"><a href="../">LOGOUT</a></li>
  </ul>
</div>
<div class="profile">
  <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://assets.thehansindia.com/hansindia-bucket/5044_1.jpg" width="auto" height="auto">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="../assets/venudp.jpg">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">Venu Naredla</p>
        <p class="subtitle is-6">@naredlav1</p>
      </div>
    </div>

    <div class="content">
      Studying Masters at SUNY New Paltz,New York,NY-12561 <a>@SUNY</a>.
      <a href="#">#Workout</a> <a href="#">#Fitness_tracker</a>
      <br>
      <time datetime="03-10-2020">11:09 PM - 10 Mar 2020</time>
    </div>
  </div>
</div>
</div>
<section class="naredla"> 

<div class="field">
  <label class="label">Instructor Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Enter Initial">
  </div>
</div>

<div class="field">
  <label class="label">Exercise </label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Module " value="Warm up">
    <span class="icon is-small is-left">
      <i class="fas fa-dumbbell"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  <p class="help is-success">Module is available</p>
</div>

<div class="field">
  <label class="label">Time</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Morning Session</option>
        <option>Evening Session</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <label class="label">Work Out Type</label>
  <div class="control">
    <div class="select">
      <select>
        <option>Cycling</option>
        <option>Running</option>
        <option>Jogging</option>
        <option>Swimming</option>
        <option>Cardio</option>
        <option>Power Lifting</option>
        <option>Strength</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <label class="label">Description</label>
  <div class="control">
    <textarea class="textarea" placeholder="Enter the Notes Here"></textarea>
  </div>
</div>
<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
<div class="file has-name is-right">
  <label class="file-label">
    <input class="file-input" type="file" name="resume">
    <span class="file-cta">
      <span class="file-icon">
        <i class="fas fa-upload"></i>
      </span>
      <span class="file-label">
        Choose a file
      </span>
    </span>
    <span class="file-name">
      naredlav1.png
    </span>
  </label>
</div>

</section>
</section>
</template>
<style>
.naredla{
  position: relative;
  top: 0%;
  left: 1%;
  padding-right: 80%;
  color: rgb(255, 255, 255);
  
}
.nav{
  position: fixed;
  padding-top: 5%;
}
.card{
  position: fixed;
  top: -15%;
  left: 70%;
  padding-top: 15%;
  padding-left:15%;
  padding-bottom: 5%;
  background: transparent;
}


</style>