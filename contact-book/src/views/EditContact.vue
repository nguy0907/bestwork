<template>
<!-- Edit Contact form -->
<div  class="p-5 bg-light border border-1 col col-12 col-lg-8 mb-3" 
style="margin-top:2rem; margin:auto;">
  <h2>Edit Contact</h2>

  <form @submit.prevent="editContact" style=" margin:auto;">
    <label>First Name</label>
   <br> <br>
    <input type="text"  class="form-control" v-model="firstName">  
   <br> <br>

    <label>Last Name</label>
   <br> <br>
    <input type="text"  class="form-control" v-model="lastName">   

<br> <br>
     <label>Email</label>
   <br> <br>
    <input type="text" class="form-control" v-model="email"> 
    <br> <br>

<!-- Save Contact Button -->
     <button @click="editContact"  type="submit" class="btn btn-primary" style="margin-right:2rem;">Save Change</button>
     <router-link to="/">Cancel</router-link>
     <br> <br>
    <button @click="deleteContact" type="button" class="btn btn-danger">Delete</button>
  </form>
   
</div>
</template>

<script> 
import{doc,updateDoc,deleteDoc,getDoc} from 'firebase/firestore'
 import db from '../db.js'
 
export default {
   name: 'Contact',
  props: ['id'],
    data: function(){
     return{
         email: '',
    firstName: '',
    lastName: ''
     }
    },
        created: async function (){
      const document = await getDoc(doc(db, 'contacts', this.id))

if (document.exists()){
    this.email = document.data().email
      this.firstName = document.data().firstName
        this.lastName = document.data().lastName
}
        },

        methods: {
          
      editContact: async function(){
await updateDoc(doc(db,'contacts',this.id),{
     email: this.email,
    firstName: this.firstName,
    lastName: this.lastName
})
this.$router.push('/')
      },

      // Delete Button
            deleteContact: async function(){
        const d = doc(db,'contacts',this.id)
        await deleteDoc(d)
      this.$router.push('/')

      }
    }
}
</script>

<style>
h2{
    margin-bottom:3rem;
}
</style>