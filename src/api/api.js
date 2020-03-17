import * as axios from "axios";

const instance = axios.create({
    baseURL:"http://5d22b7fd4e05c600146ef4dd.mockapi.io/cupcake/books"
})

export const booksAPI = {
    getBooks(){
        return instance.get().then(response => response.data )
    }
}