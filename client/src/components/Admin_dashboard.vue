<template>
<div class="admin">
  <section>
       <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="container">
      <div class="navbar-brand">
         <router-link to="AdminDashboard"><img src=".././assets/logo.png" width="100" height="auto"></router-link>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/Online">Online Users </a> 
            <a class="navbar-item" href="/Posts"> Posts Active </a>
            <a class="navbar-item" href="/Accounts">Edit Accounts</a>
        </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <figure class="image is-32x32">
              <img class="is-rounded" src=".././assets/Blog-post/blog1.jpg">
            </figure>
          </div>
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-light">
                <router-link to="login">Logout</router-link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>  
     <div class="container">
     <div class="columns">
      <div class="column is-8">
        <div class="card">
     
      <div class="card-content">
        <div class="content">
          <span  v-for="item in postData" :key="item.message">
          <div class="media">
          <div class="media-left is-4">
            <figure class="image is-64x64">
              <img v-bind:src="item.File" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content is-6">
            <p class="title is-4"> {{item.Title}}</p>
            <p class="subtitle is-6">{{item.Desc}}</p>
          </div>
          <div class="is-2">
            <div class="dropdown is-hoverable">
              <div class="dropdown-trigger">
                 <span class="icon is-small">
        <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
      </span>
              </div>
              <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                <div class="dropdown-content">
                   <div class="dropdown-item dropclass"  v-on:click="InActive(item)" style="border-bottom:1px solid #ccc">
                    InActive
                  </div>
                   <div class="dropdown-item dropclass"  v-on:click="Remove(item)">
                    Remove
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div class="columns">
            <div class="column is-6">
              {{item.uploaderName}}
            </div>
            <div class="column is-6 has-text-right">
              <time datetime="2016-1-1">{{item.Time}}</time>
            </div>
          </div>
          <hr>
          </span>
        </div>
      </div>
    </div>
      </div>
      <div class="column is-4">
        <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src=".././assets/Blog-post/blog1.jpg" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <div class="columns">
            <div class="column is-4">
              <b>Name</b>
            </div>
            <div class="column is-8">
              ADMIN
            </div>
          </div>
          <div class="columns">
            <div class="column is-4">
              <b>Email</b>
            </div>
            <div class="column is-8">
              naredlav1
            </div>
          </div>
          <div class="columns">
            <div class="column is-4">
              <b>Contact</b>
            </div>
            <div class="column is-8">
              12561
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div> 
    </div>
  </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
      return {
        profile:null,
        fileBase64: null,
        postData:  null
      }
    },
    created(){    
          this.getAllPosts();  
    },
    methods:{
      get_all_posts: function() {  
        this.$loading(true)
          axios.get("http://localhost:3000/get_all_posts")    
           .then((response) => {    
             this.$loading(false)
               console.log("Logged in"+JSON.stringify(response)) ;  
                this.postData=response.data;                  
            })    
            .catch((errors) => {  
              this.$loading(false)  
                console.log("Internal server error");
            })
      },
      edit_posts: function(data){
                 this.$loading(true)
           axios.post("http://localhost:3000/edit_accounts", {data})    
           .then((response) => {    
               console.log("Logged in"+JSON.stringify(response)) ;  
                this.$loading(false)
                 this.$alert("Account Altered successfully.");
                this.getAllPosts();                 
            })    
            .catch((errors) => {    
                console.log("Internal server Error");
            });
      },
      deactivate_post: function(data){
         this.$loading(true)
           axios.post("http://localhost:3000/deactivate_post", {data})    
           .then((response) => {    
               console.log("Logged in"+JSON.stringify(response)) ;  
                this.$loading(false)
                 this.$alert("Post deactivated successfully.");
                this.getAllPosts();                 
            })    
            .catch((errors) => {    
                console.log("Internal server Error");
            });
      },
            Active_users: function(data){
         this.$loading(true)
           axios.post("http://localhost:3000/activate_post", {data})    
           .then((response) => {    
               console.log("Logged in"+JSON.stringify(response)) ;  
                this.$loading(false)
                 this.$alert("Post activated successfully.");
                this.getAllPosts();                 
            })    
            .catch((errors) => {    
                console.log("Internal server Error");
            });
      },
      delete: function(data){
        this.$loading(true)
           axios.post("http://localhost:3000/delete_post", {data})    
           .then((response) => {    
             this.$loading(false)
               console.log("Logged in"+JSON.stringify(response)) ;  
               this.$alert("Post is removed.");
                this.getAllPosts();                    
            })    
            .catch((errors) => {    
              this.$loading(false)
                console.log("Internal Server Error");
            })
      }
    }
}
</script>
