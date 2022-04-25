<template>
 
    <div className="tile-container">
      <div v-for="item in books.value" :key="item.id" :class="{card:true,imgFont:true}"  >
           <div id="myDiv" ref="myDiv"><button  @click="retriveSingleBook(item?.title)">
              <img :src="item.thumbnailUrl" alt="thumbnailUrl"  />
              </button></div>
         {{item.title}}
  

      </div>
    </div>
</template>

<script>
import axios from 'axios'

import Book from "../Book";
export default {
  name: "BookData",
  data() {
    return {
      books: [],
      jsonCon: [],
      bookName:'',
      myDiv : this.$refs.myDiv

    };
  },
  created() {
    this.retrivesBooks();
    this.retriveSingleBook();
   
  },


  methods: {
   retrivesBooks() {
      Book.getAll()
        .then((response) => {
          this.books = response.data;
          console.log(response)
       

        })
        .catch((err) => {
          console.log(err);
        });
    },


  async retriveSingleBook(id){

    console.log('clicked..',id)

     let result = await axios.post(`https://book-project-backend.herokuapp.com/api/v1/book/singleBook`,{title:id})
     console.log('result::->',result)
     }


    // Book.getSingleBook({bookName:id})
    // .then((response)=>{
    //   this.books = response.data;
    // console.log("books.value array ----->",this.bookName)

    // }).catch((err)=>{
    //   console.log(err);
    // });
    
  // }

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