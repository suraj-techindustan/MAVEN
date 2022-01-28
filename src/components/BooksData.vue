<template>
  <h1 :class="{ doFont: true, docolorBG: true }">Welcome To Our Book Store</h1>

  <div>
    <table class="table">
      <thead></thead>

      <tbody>
         
        <tr v-for="item in books.value" :key="item.title">
          <td>
               <button class='readButton'>Read</button>
               <button class='downloadButton'>Download</button>
            <h5>{{ item.title }}</h5>
          </td>
        </tr>
      </tbody>
    </table>
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
    };
  },
  created() {
    this.retrivesBooks();
  },
  methods: {
    retrivesBooks() {
      Book.getAll()
        .then((response) => {
          this.books = response.data;

          // console.log("books",typeof this.books)
          // console.log("books.value array", this.books.value)
          // console.log("books.value[0].title = ", this.books.value[0].title)
          // console.log("books.value[1].title = ", this.books.value[1].title)
          // console.log("books.value[2].title = ", this.books.value[2].title)
          console.log(
            "%c suraj",
            "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)"
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>


<style scoped>
.doFont {
  font-family: Verdana;
}
.docolorBG {
  background-color: aqua;
}
.readButton{
    font-family:Tahoma;
    color:black;
    background-color: #4CAF50;
    border-radius: 5px;
    /* position: right; */
    position: absolute;

  right: 90px;

}

.downloadButton{
    font-family:Tahoma;
    color:black;
    background-color: #0a8bf5;
    border-radius: 5px;
       position: absolute;

  right: 15px;
}

</style>