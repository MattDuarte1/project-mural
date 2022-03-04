import {useNavigate} from 'react-router-dom'
import {Container} from './style'

export const NotFound = () => {
    const navigate = useNavigate();


    const handleBackButton = () => {
        navigate(-1)
    }
    return (
        <Container>
        <div style={{ flexDirection: "column", justifyContent: 'center', width: 1200, height: 500, display:'flex', alignItems: 'center'}}>
           <h1>PÁGINA NÃO ENCONTRADA</h1>
           <button onClick={handleBackButton} type='button'>Voltar</button>
        </div>
        </Container>
    )
}