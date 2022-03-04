import { useRoutes } from "react-router-dom"
import { Home } from './pages/Home/Home'
import { Post } from './pages/Post/Post';
import { NotFound } from './pages/NotFound/NotFound'
import { PostsTable } from "./components/PostsTable";



export const RouteList = () => {
    return useRoutes([
        { path: '/', element: <Home/>},
        { path: '/posts', element: <PostsTable />},
        { path: '/post/:id', element: <Post/> },
        { path: '*', element: <NotFound/>}
    ])

}