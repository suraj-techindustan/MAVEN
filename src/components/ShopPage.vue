<template>
    <h1>This is Shop Page..</h1>

<P>Message : {{message}}</P>
</template>

<script>
export default{
    name:"ShopPage",
    props:
        ["message"]
        // bookData:Object
    
    // data(){
    //     // console.log('Book Data : ', this.bookData)
    //     // console.log('Book Data : ', this.message)
    // }
}


</script>