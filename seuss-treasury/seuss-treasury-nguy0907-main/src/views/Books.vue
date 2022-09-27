<template>
    <div class="row">
<div class="col">
     <h1 class="display-4">Books</h1>
</div>
    </div>
   
    <div class="row">
<div class="col col-6 col-md-4 col-lg-3 mb-3"
  v-for="book in books" 
   :key="book">
    <router-link
    class="book"
    :to="'/book/'+ book.id">
    <img class="img-fluid" :src="book.image"  >
    </router-link>
   
</div>

    </div>
</template>

<script>
export default{
    name: 'Books',
    data: function(){
        return{
            books: []
        }
    },
    created: function(){
    
fetch('https://seussology.info/api/books')
  .then(response => response.json())
  .then(json => this.books = json)

    }
}
</script>

<style></style>