<template>
<!-- New Contact Form will look the same as the Edit Contact form, but there is a delete button, and there is nothing in the input yet. -->
<div class="p-5 bg-light border border-1 mb-3" style="margin-top:2rem;"
@submit.prevent="addContact">
  <h2>Add Contact </h2>

  <form action="" >
    <label>First Name</label>
   <br> <br>
    <input type="text" class="form-control" v-model="firstName">  
   <br> <br>

    <label>Last Name</label>
   <br> <br>
    <input type="text" class="form-control" v-model="lastName">   

<br> <br>
     <label>Email</label>
   <br> <br>
    <input type="text" class="form-control" v-model="email"> 
    <br> <br>

<!-- This Button will add the contact -->
     <button @click="addContact" type="button" class="btn btn-primary" style="margin-right:2rem;">Add</button>
     <router-link to="/">Cancel</router-link>
  </form>
  
</div>
</template>

<script> 
import {collection, addDoc} from 'firebase/firestore'
 import db from '../db.js'

export default{
 
  data: function(){
    return{
   email: '',
    firstName: '',
    lastName: ''
    }
  },

  // Add Contact Method
  methods: {
    addContact: async function (){
const c = collection(db, 'contacts')
const document = await addDoc(c,{
    email: this.email,
    firstName: this.firstName,
    lastName: this.lastName
})
this.$router.push('/contact/' + document.id)
    },

  }
}
</script>

<style>
h2{
    margin-bottom:3rem;
}

form{
  text-align: center;
}

input{
  margin: auto;
}
</style>