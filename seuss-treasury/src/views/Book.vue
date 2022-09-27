<template>
    <div class="row" >
<div class="col">
    <h1 class="display-4">Books Info</h1>
       <img  class="img-fluid" :src="book.image" :alt="book.title"
       style="width:300px;
       float:left;
       padding-right:1rem;">
   <h2>{{book.title}}</h2>
   <div>
    <p>{{book.description}}</p>   
   </div>
</div>
<div></div>
    </div>
</template>

<script>

export default{
 name: 'Book',
    props: ['id'],
    data: function(){
        return{
            book:{ 
                id: 0,
                 title: ' ',
                name: ' ',
                image:' ',
                description: ' '
            }
        }
    }, 
    created: function(){
        if (this.id){
        fetch('https://seussology.info/api/books/' + this.id)
       .then(response => response.json())
        .then(json =>{
            this.book = json,
            this.book.name = json.name,
            this.book.title = json.title,
            this.book.id = json.id,
            this.book.image = json.image,
            this.book.description = json.description
            
        })  
            } else{
                this.$router.push('/')
            }
    }
}
</script>

