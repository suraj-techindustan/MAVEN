<template>
    <h1>This is Shop Page..</h1>

<P>{{bookData}}</P>
</template>

<script>
export default{
    name:"ShopPage",
    props:{
        bookData:Object
    },
    data(){
        console.log('Book Data : ', this.bookData)
    }
}


</script>