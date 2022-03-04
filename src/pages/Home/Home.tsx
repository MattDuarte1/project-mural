import { UsersItem } from '../../components/UsersItem';
import { Container, Content } from './style'
import {useContext} from 'react'
import { UsersContext } from '../../PostsContext'
import { useNavigate } from 'react-router-dom'


export const Home = () => {
    const users = useContext(UsersContext)
    const navigate = useNavigate();

    const handleGoPage = (id: string) => {
        navigate(`${id}`)
    }


    return(
        <Container>
            <div style={{padding: '2rem'}}>
            <button onClick={() => handleGoPage("/posts")}>Ir para Posts</button>
            </div>
            <h1 style={{textAlign: 'center'}}>Lista de usuarios</h1>
           <Content>
            {users.map((item, index) => (
                <UsersItem key={index} data={item}/>
            ))}
           </Content>
        </Container>
    );
}