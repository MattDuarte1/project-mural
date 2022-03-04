import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 5rem;

    button {
        border: 0;
        border-radius: 0.55rem;
        background-color: var(--green);
        padding: 1rem 3rem;
        color: #FFF;
        transition: all 0.3s ease;

        &:hover {
            opacity: 0.6;
            padding: 1.1rem 5.1rem;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        background: var(--shape);
        border-radius: 0.45rem;
        padding: 1rem 5rem 20rem;
        margin-top: 2rem;

        span {
            margin-top: 3rem;
        }
    }

`;

export const Title = styled.h1`
  font-size: 2rem;
  color: var(--text-title);
  margin-bottom: 1.5rem;


  h2 {
      font-size: 1rem;
      font-size: normal;
      font-weight: 200;
  }  
`