/* eslint-disable array-callback-return */
import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Title } from './style'
import { api } from '../../api'
import { CommentsContext } from '../../PostsContext'


interface PostProps {
    userId?: number;
    id?: number;
    title: string;
    body: string;
}


export const Post = () => {
    const [posts, setPosts] = useState<PostProps>();
    const params = useParams();
    const navigate = useNavigate();
    const comments = useContext(CommentsContext);

    useEffect(() => {
        if(params.id) {
            carregarPost(params.id)
            
        }
    },[params.id])


    const handleBackButton = () => {
        navigate(-1);
    }

    const carregarPost = async (id: string) => {
        let response = await api.getOnePost(id);
        setPosts(response)
    }

    const filterComents = comments.filter((item) => {
        if(params.id) {
            return item.postId === Number(params.id) ? item : false ;
        }
    })


    return(
      <Container>
          <div>
          <Title>
            {posts?.title}
          </Title>
              <h2>Description</h2>
              <span>{posts?.body}</span>
              <ul>
                  <br />
                  <h3>Comentarios</h3>
              {filterComents.map((item, index) => (
                  <li key={index} style={{listStyle: 'none', padding: '1rem', background: 'var(--background)', margin: '1rem', border: '0', borderRadius: '0.35rem'}}>{item.name}</li>
              ))}
              </ul>
              <button onClick={handleBackButton}>Voltar</button>
              
          </div>

      </Container>
    )
}