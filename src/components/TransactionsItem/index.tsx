import { Link } from 'react-router-dom'
import { Container } from './style'
import {} from './style'

interface dataProps {
    data: {
        userId?: 1;
        id: 1;
        title: string;
        body?: string;
    }
}

export const TransactionsItem = ({data}:dataProps) => {
    return (
        <tr>
            <Container >
                <Link style={{textDecoration: 'none', color: "var(--text-title)"}} to={`/post/${data.id}`}><>{data.id} &emsp; &emsp; {data.title}</></Link>
            </Container>
            
        </tr>
    )
}