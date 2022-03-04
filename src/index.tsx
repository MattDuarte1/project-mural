import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import {UsersContextProvider, PostContextProvider, PhotosContextProvider, CommentsContextProvider } from './PostsContext'

ReactDOM.render(
<React.StrictMode>
  <BrowserRouter>
    <PostContextProvider>
      <PhotosContextProvider>
        <CommentsContextProvider>
          <UsersContextProvider>
            <App />
          </UsersContextProvider>
        </CommentsContextProvider>
      </PhotosContextProvider>
    </PostContextProvider>
  </BrowserRouter>
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

