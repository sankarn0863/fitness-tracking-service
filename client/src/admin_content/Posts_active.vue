<template>
<section>
 <div class="tabs is-centered">
  <ul>
    <li>
      <a href="/friends">
        <span class="icon is-small"><i class="fas fa-users" aria-hidden="true"></i></span>
        <span>Friends</span>
      </a>
    </li>
    <li>
      <a href="/search">
        <span class="icon is-small"><i class="fas fa-search" aria-hidden="true"></i></span>
        <span>Search</span>
      </a>
    </li>
    <li>
      <a href="/request">
        <span class="icon is-small"><i class="fas fa-comments" aria-hidden="true"></i></span>
        <span>Requests</span>
      </a>
    </li>
    <li>
      <a href="../">
        <span class="icon is-small"><i class="fas fa-sign-out-alt" aria-hidden="true"></i></span>
        <span>LOGOUT</span>
      </a>
    </li>
  </ul>
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
                   <div class="dropdown-item dropclass"  v-on:click="ActivatePost(item)" style="border-bottom:1px solid #ccc">
                    Activate
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
              {{item.upload_Name}}
            </div>
            <div class="column is-6 has-text-right">
              <time datetime="2016-1-1">{{item.Time}}</time>
            </div>
          </div>
          <hr>
          </span>
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
    </section>
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
          this.get_all_deactivated_posts();  
    },
    methods:{
     get_all_deactivated_posts: function() {  
           this.$loading(true)
          axios.get("http://localhost:3000/get_all_deactivated_posts")    
           .then((response) => {    
               console.log("Logged in"+JSON.stringify(response)) ;  
                this.postData=response.data;   
                 this.$loading(false)               
            })    
            .catch((errors) => { 
                this.$loading(false)    
                console.log("Server Side Error");
            })
      },
      Activate_posts: function(data){
         this.$loading(true) 
           axios.post("http://localhost:3000/activate_posts", {data})    
           .then((response) => {    
               this.$loading(false) 
               console.log("Logged in"+JSON.stringify(response)) ;  
                 this.$alert("Post activated successfully.");
                this.get_all_deactivated_posts();                 
            })    
            .catch((errors) => {    
                this.$loading(false) 
                console.log("Internal server error");
            });
      },
      Delete: function(data){
          this.$loading(true) 
           axios.post("http://localhost:3000/deactivate_Post", {data})    
           .then((response) => {  
               this.$loading(false)   
               console.log("Logged in"+JSON.stringify(response)) ;  
               this.$alert("Post deactivated successfully");
               this.get_all_deactivated_posts();                    
            })    
            .catch((errors) => {   
                this.$loading(false)  
                console.log("Internal server error");
            })
      }
    }
}
</script>
<style scoped lang="scss">
.dropclass:hover{
  cursor: pointer;
  font-family: 'Courier New', Courier, monospace;
  font-size: 22px;
}
</style>
