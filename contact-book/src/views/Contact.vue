<template>
<br>
<div style="margin-bottom:-1.3rem;">
    <router-link to="/" >  Contacts</router-link>
</div>
 
<!-- Link to the edit page -->
   <div>
    <router-link :to="'/editcontact/' + id" style="float:right;" class=" justify-content-end">Edit</router-link>  
   </div>
   
   <!-- Contact Page will display the Name, Last Name, and Email -->
<div class="p-5 bg-light border border-1 mb-3" style="margin-top:2rem;">
  <h2>{{lastName}}, {{firstName}}</h2>
   
   <p>Email:</p>
  <p>{{email}}</p>
</div>
</template>

<script> 
import{doc, getDoc} from 'firebase/firestore'
 import db from '../db.js'
export default {
  
    name:'Contact',
    props: ['id'],
    data: function(){
     return{
            email: '',
            firstName: '',
            lastName: ''
     }
    },
    created: async function(){
      const document = await getDoc(doc(db, 'contacts', this.id))

if (document.exists()){
    this.email = document.data().email
      this.firstName = document.data().firstName
        this.lastName = document.data().lastName
}
    },


}
</script>

<style>
h2{
    margin-bottom:3rem;
}

</style>