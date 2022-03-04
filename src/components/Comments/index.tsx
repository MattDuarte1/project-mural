interface DataProps {
    data: {
        postId: number,
        id: number,
        name: string
    }
}

export const Comments = ({data}:DataProps) => {
    return (
        <div>
            <h4>Comentários</h4>
            {data?.name}
        </div>
    )
}