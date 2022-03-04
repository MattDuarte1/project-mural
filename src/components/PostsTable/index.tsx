import { TransactionsItem } from "../PostItem"
import { Container } from "./style"
import { useContext } from "react"
import {PostsContext} from '../../PostsContext'


export const PostsTable = () => {
    const data = useContext(PostsContext)

    return(
        <Container>
            <h1 style={{color: 'var(--text-title)', fontSize:'1.7rem', fontWeight: 400}}>Listagem de Posts</h1>
           <table>
             <thead>
                 <tr>
                     <th><p>ID</p> Titulo</th>
                     
                 </tr>
             </thead>

             <tbody>
                 {data.map((item, index) => (
                 <TransactionsItem key={index} data={item}/>
                 ))}
             </tbody>
           </table>
        </Container>
    )
}