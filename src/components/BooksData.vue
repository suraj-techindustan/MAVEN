<template>
 
    <div className="tile-container">
      <div v-for="item in books.value" :key="item" :class="{card:true,imgFont:true}"  >
           <!-- <button ref="Btn" @click="retriveSingleBook"> -->
              <img :src="item.thumbnailUrl" alt="thumbnailUrl"  />
              <!-- </button> -->
         {{item.title}}
          <!-- {{item.title}} -->
      

      </div>
    </div>
</template>

<script>

import Book from "../Book";
export default {
  name: "BookData",
  data() {
    return {
      books: [],
      jsonCon: [],
      // images : item.thumbnailUrl
    };
  },
  created() {
    this.retrivesBooks();
    this.retriveSingleBook();
   
  },

 mounted () {
    this.$refs.Btn.click()
    },


  methods: {
    retrivesBooks() {
      Book.getAll()
        .then((response) => {
          this.books = response.data;
          console.log("books.value array", this.books.value)
          // console.log("books.value array", this.books.value.title)
          console.log("books.value array thumbnail", this.books.thumbnailUrl)
        })
        .catch((err) => {
          console.log(err);
        });
    },

    logClicked () {
      console.log('Clicked')
    },



  retriveSingleBook(){

    console.log('clicked..')

    Book.getSingleBook()
    .then((response)=>{
      this.books = response.data;
    console.log("books.value array ----->",this.books.value.title)

    }).catch((err)=>{
      console.log(err);
    });
    
  }

  },
};
</script>


<style scoped>
/* .doFont {
  font-family: Verdana;
  color : red
} */
.imgFont{
  font-family: Verdana;
  color : red;
  /* font-size: 12%; */
}

.docolorBG {
  background-color:#2D3032;
}
.readButton{
    font-family:Tahoma;
    color:black;
    background-color: #4CAF50;
    border-radius: 5px;
    position: absolute;
    right: 90px;

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
    background-color: #010a01;


  }

.downloadButton{
    font-family:Tahoma;
    color:black;
    background-color: #0a1af5;
    border-radius: 5px;
    position: absolute;
    right: 15px;
}
.tile-container{
  display:flex;
  grid-gap:102px;
  flex-direction:row;
  flex-wrap:wrap;
  margin-left: 3%;


}
.card{
  display: flex;
  flex-direction: column;
  height:110px;
  width:130px; 
  box-shadow: 6px 5px 9px -7px #888888;


}
</style>