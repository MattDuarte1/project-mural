import { createContext, ReactNode } from 'react';
import {api} from './api'
import { useState, useEffect } from "react";

interface dadosProps {
    userId?: 1;
    id: 1;
    title: string;
    body?: string;
  }

  interface CommentsProps {
      postId: number;
      id: number;
      name: string;
      email: string;
      body: string;
  }

  interface PhotosProps {
      albumId: number,
      id: number,
      title: string,
      url: string,
      thumbnailUrl: string;
  }

  interface UsuariosProps {
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

  interface ProviderProps {
      children: ReactNode;
  }

export const PostsContext = createContext<dadosProps[]>([]);
export const PhotosContext = createContext<PhotosProps[]>([])
export const CommentsContext = createContext<CommentsProps[]>([])
export const UsersContext = createContext<UsuariosProps[]>([])


export const PostContextProvider = ({ children }: ProviderProps) => {
    const [dados, setDados] = useState<dadosProps[]>([])

    useEffect(() => {
        carregarDados();
    },[])

    const carregarDados = async () => {
        let response = await api.getAllPost();
        setDados(response);
    }

    return (
        <PostsContext.Provider value={dados}>
        {children}
        </PostsContext.Provider>
    );
}

export const PhotosContextProvider = ({ children }: ProviderProps) => {
    const [photos, setPhotos] = useState<PhotosProps[]>([])

    useEffect(() => {
        carregarFotos();
    },[])

    const carregarFotos = async () => {
        let response = await api.getAllPhotos();
        setPhotos(response);
    }

    return (
        <PhotosContext.Provider value={photos}>
        {children}
        </PhotosContext.Provider>
    );
}

export const CommentsContextProvider = ({ children }: ProviderProps) => {
    const [comments, setComments] = useState<CommentsProps[]>([])

    useEffect(() => {
        carregarComments();
    },[])

    const carregarComments = async () => {
        let response = await api.getAllComents();
        setComments(response);
    }

    return (
        <CommentsContext.Provider value={comments}>
            {children}
        </CommentsContext.Provider>
    )
}


export const UsersContextProvider = ({ children }: ProviderProps) => {
    const [users, setUsers] = useState<UsuariosProps[]>([])

    useEffect(() => {
        carregarUsuarios();
    }, [])

   const carregarUsuarios = async () => {
        let response = await api.getAllUsers();
        setUsers(response)
    }

    return (
         <UsersContext.Provider value={users}>
             {children}
         </UsersContext.Provider>
    )

}




