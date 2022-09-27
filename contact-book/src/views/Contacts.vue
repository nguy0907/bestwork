<template >
 <br>   <br>
    <h1>Contacts</h1>
      <br>   <br> 

 
 <form class="col col-12 col-lg-8 mb-3"
style="margin:auto;">

   <!-- Create New Contact Button -->
   
     <router-link to="/newcontact" >
     <button  to="/newContact" class="btn btn-primary" id="addButton"> Add  </button>  
</router-link>
<br> <br> 

<!-- Search Bar -->
<div style="text-align:center;">
  <input type="search"  id="query" style="height:50px; width:100%;" placeholder="Search"
     v-model="query" >
     </div>
 <br> 

<div v-for="contact in filterContact()"
:key="contact.id">
 <router-link class="text-decoration-none text-body" :to="'/contact/' + contact.id">
        <div class="card">
        
          <div class="card-body"> {{ contact.lastName }}, {{ contact.firstName }}</div>
        </div>
      </router-link>
      </div>
      </form>
</template>

<script> 
import{collection, query, orderBy, onSnapshot} from 'firebase/firestore'
 import db from '../db.js'
export default {
  
    name:'Contacts',
    data: function(){
     return{
            contacts: [],
            query: ''
     }
    },
    created: function(){
        const q = query(collection(db,'contacts'), orderBy('lastName'))
        const unsubscribe = onSnapshot(q, (querySnapshot) =>{

const data = []
querySnapshot.forEach((doc) => data.push({
    id: doc.id,
    email: doc.data().email,
    firstName: doc.data().firstName,
    lastName: doc.data().lastName

}))
this.contacts = data
        });
    },

    // Search Function
    methods: {    
     filterContact: function (){
            return this.contacts.filter(contacts => 
            contacts.lastName.toLowerCase().includes(this.query.toLowerCase())||
            contacts.firstName.toLowerCase().includes(this.query.toLowerCase()))
        }
    }
}
</script>

<style>
.form-control{
    width:360px;
}

h1,h2{
    text-align: center;

}


</style>