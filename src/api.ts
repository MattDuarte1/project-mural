import axios from 'axios'


const http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})



export const api = {
    getAllPost: async () => {
        let response = await http.get('/posts')
        return response.data;
    },
    getOnePost: async (id: string) => {
        let response = await http.get(`/posts/${id}`)
        return response.data
    },
    getAllPhotos: async () => {
        let response = await http.get("/photos");
        return response.data
    },
    getAllComents: async () => {
        let response = await http.get('/comments');
        return response.data
    },
    getAllUsers: async () => {
        let response = await http.get('/users/')
        return response.data
        
    },
}