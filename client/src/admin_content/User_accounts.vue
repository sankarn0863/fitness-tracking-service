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
    <div class="section container text-center">
        <h2><b><u>Manage Users</u></b></h2>
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thread>
                <tr>
                    <th>S.No</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone Num</th>
                </tr>
            </thread>
            <body>
                <tr  v-for="(item, index) in items" :key="item.message">
                    <th>{{index+1}}</th>
                    <td>{{item.First_Name}} </td>
                    <td>{{item.Last-Name}}</td>
                    <td>{{item.Email}}</td>
                    <td>{{item.Phone}}</td>
                    <td>
                         <a href="javascript:void(0)" type="button" v-on:click="active_user(item)" class = "button is-primary is-outlined">
                            <span>Activate</span>
                            <span class = "icon is-small">
                                <i class = "fas fa-check"></i>
                            </span>
                        </a>&nbsp;
                        <a href="javascript:void(0)" type="button" v-on:click="deactivate_user(item)" class = "button is-danger is-outlined">
                            <span>Deactivate</span>
                            <span class = "icon is-small">
                                <i class = "fas fa-trash"></i>
                            </span>
                        </a>
                    </td>
                </tr>
                 <tr  v-if="items.length==0">
                    <td colspan="8" class="has-text-centered">No Data</td>
                </tr>
            </body>
        </table>
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
  data:()=>({
       searchQuery: null,
        column: null,
        items: null
    }),
   created(){       
        this.get_all_users();
    },
    methods:{
        get_all_users:function(){
            this.$loading(true)
            axios.get("http://localhost:3000/get_all_users")    
            .then((response) => {  
                console.log(response);
                this.items=response.data;
                this.$loading(false)
                })    
                .catch((errors) => {  
                    this.$loading(false) 
                    console.log("Error: "+errors);    
                })
        },
        deactivated_user: function(data){
             this.$loading(true)
            axios.post("http://localhost:3000/deactivated_user", {data})    
            .then((response) => {  
                 this.$alert("User deactivated successfully.");
                 this.$loading(false)
                 this.getAllUser();
                })    
                .catch((errors) => {  
                    this.$loading(false)  
                    console.log("Error: "+errors);    
                })
        },
         Delete: function(data){
             this.$loading(true)
             axios.post("http://localhost:3000/delete_user", {data})    
            .then((response) => {  
                 this.$alert("User is removed.");
                this.$loading(false)
                 this.getAllUser();
                })    
                .catch((errors) => { 
                    this.$loading(false)   
                    console.log("Error: "+errors);    
                })
        }
    }
}
</script>
    