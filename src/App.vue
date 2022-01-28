<template>
 <!-- <div id="screen" :style="{ 'background-color': backgroundColor }"> -->


<BooksData />


<!-- </div> -->

</template>
<script>
import BooksData from './components/BooksData.vue'

export default {
  name: 'App',
 data() {
    return {
    
      backgroundColor: "#006666",
    };
  },

  components: {
    BooksData,
   
  
  },
}
</script>

<style>

#screen {
  width: 100vw;
  height: 120vh;
 
}         
*{
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}

.fontColor{
  color : #ffffff;
}
.navBarColor{
  color : #292929;
}


</style>
