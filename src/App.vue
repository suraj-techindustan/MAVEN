<template>
 <div id="screen" :style="{ 'background-color': backgroundColor }">
  <h1 :class="{ neonText: true  }">Books...</h1>
<!-- <BooksData /> -->
<Signup />

</div>


</template>
<script>
// import BooksData from './components/BooksData.vue'
import Signup from './components/Signup.vue'


export default {
  name: 'App',
 data() {
    return {
    
      // backgroundColor: "#2D3032",
      backgroundColor: "#1111",
    };
  },

  components: {
    // BooksData,
    Signup

   
  
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

.neonText {
    color: #fff;
    text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #f09,
      0 0 82px #f09,
      0 0 92px #f09,
      0 0 102px #f09,
      0 0 151px #f09;
    font-family: "Vibur", sans-serif;
    background-color: #2D3032;


  }


</style>
