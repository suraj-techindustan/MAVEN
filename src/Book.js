import http from "./Http-comman"
class Books{
    getAll(){
        return http.get("/api/v1/book/allBooks");
    }
}
export default new Books();