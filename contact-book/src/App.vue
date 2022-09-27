<template>
  <div class="container">


   <router-view>
   </router-view>
  </div>
</template>

<script>
 
export default {
  
    data: function(){
     return{
         email: this.email,
    firstName: this.firstName,
    lastName: this.lastName
     }
    }
}
</script>

<style></style>