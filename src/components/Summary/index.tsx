import { Container } from "./style"
import { useContext} from 'react'
import {  PostsContext, CommentsContext, UsersContext  } from '../../PostsContext'

export const Summary = () => {
    const data = useContext(PostsContext);
    const comments = useContext(CommentsContext);
    const usuario = useContext(UsersContext)

    return (
        <Container>
            <div>
                <header>
                    <p>Total de Usuarios</p>
                </header>
                <strong>{usuario.length}</strong>
            </div>
            <div>
                <header>
                    <p>Total de Posts</p>
                </header>
                <strong>{data.length}</strong>
            </div>
            <div>
                <header>
                    <p>Total de Comentários</p>
                </header>
                <strong>{comments.length}</strong>
            </div>
        </Container>
    )
}