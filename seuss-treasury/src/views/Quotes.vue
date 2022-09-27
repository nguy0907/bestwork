<template>
    <div class="row">
<div class="col">
     <h1 class="display-4">Quotes</h1>
</div>
    </div>
   
    <div class="row">
<div class="col col-6 col-md-4 col-lg-5 mb-3"
  v-for="quote in quotes" 
   :key="quote">
    <router-link
    class="quotes"
    :to="'/quotes/' + quote.name">
    </router-link>
  <div>
     <p>{{quote.text}} {{quote.title}}</p>
  </div>
</div>

    </div>
</template>

<script>
export default{
    name: 'Quotes',
    data: function(){
        return{
            quotes: []
        }
    },
    created: function(){
    
fetch('https://seussology.info/api/quotes/random/10'+ this.text)
  .then(response => response.json())
  .then(json => {
      this.quotes = json
      
      })

    }
}
</script>

<style></style>