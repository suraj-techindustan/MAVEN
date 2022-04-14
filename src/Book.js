import http from './Http-comman'
class Books{
    getAll(){
        return http.get("/api/v1/book/allBooks");
    }
    getSingleBook(){
        return http.post("/api/v1/book/singleBook");
    }
}
export default new Books();

