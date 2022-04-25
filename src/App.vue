<template>

<router-view />

</template>
<script>


export default {
  name: 'App',
 data() {
    return {

      backgroundColor: "#1111",
    };
  },

  components: {
  
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
/* Css for login and Signup */


.register input ,.login input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    border: 1px solid skyblue;
    margin: 0px auto 30px auto;
}
.register ,.login h2{
    color:skyblue;
}

.button_div{
    align-items: center;
    justify-content: center;
    display: flex;

}

.sigup_button button ,.login_button button{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 15px;
    font-size: 22px;
    border-color: skyblue;
    box-shadow: rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px, rgb(10 37 64 / 35%) 0px -2px 6px 0px inset;
}




</style>
