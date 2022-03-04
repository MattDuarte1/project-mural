interface UsuariosProps {
    data: {
        id: number,
        name: string,
        username: string,
        email: string,
        address?: {
            street: string,
            suite: string,
            city: string,
            zipcode: string,
            geo?: {
                lat: string,
                lng: string
            }
        }
    }
}

export const UsersItem = ({data}: UsuariosProps) => {
    return (
        <div className='card'>
            <img src="https://cdn-icons-png.flaticon.com/512/17/17004.png" alt="" />
            <h1 style={{fontSize: 14, fontWeight: 500}}>Usuário: {data.username}</h1>
            <h2 style={{fontSize: 11, marginBottom: 5}}>Nome: {data.name}</h2>
            <h3 style={{fontSize: 10, marginTop: 25}}>Email: {data.email}</h3>
        </div>
    );
}