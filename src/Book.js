import http from "./Http-comman"
class Books{
    getAll(){
        return http.get("/allBooks");
    }
}
export default new Books();