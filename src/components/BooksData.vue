<template>
     <h1 :class="{doFont:true,docolorBG:true}">Welcome To Our Book Store</h1>

<div>

<table class ="table">

<thead>  

</thead>

<tbody>

<tr v-for="item in books.value" :key="item.title">

<td><h5>{{item.title}}</h5></td>
<!-- <h1>{item.title}</h1> -->
<!-- {{title.title}} -->
<!-- <td>hiiii</td>
<p>hiii</p> -->
</tr>
<!-- <h1>{{books.value[0].title}}</h1> -->

</tbody>

</table>


</div>



</template>

<script>

import Book from "../Book"
export default{
    name :"BookData",
    data(){
        return{
            books :[],
            jsonCon:[]
        };
    },
    created(){
        this.retrivesBooks()
    },
    methods:{
        retrivesBooks(){
            Book.getAll().then(response=>{
                this.books = response.data;
                
                console.log("books",typeof this.books)
                console.log("books.value array", this.books.value)
                console.log("books.value[0].title = ", this.books.value[0].title)
                console.log("books.value[1].title = ", this.books.value[1].title)
                console.log("books.value[2].title = ", this.books.value[2].title)


                
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
}


</script>


<style scoped>
.doFont{
font-family :Verdana;
}
.docolorBG{
    background-color: aqua;
}


</style>