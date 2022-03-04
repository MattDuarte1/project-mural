import styled from 'styled-components';

export const Container = styled.main`
    margin: 0 auto;
    display: flex ;
    max-width: 1200px ;
    flex-direction: column ;
    justify-content: center ;
    align-items: center;

    button {
        border: 0;
        width: 200px ;
        border-radius: 0.55rem;
        background-color: var(--green);
        padding: 1rem 2rem;
        color: #FFF;
        transition: all 0.3s ease;

        & + button {
            margin-left: 25px ;
        }

        &:hover {
            opacity: 0.6;
            padding: 1.2rem 2.2rem;
        }
    }

  
`;

export const Content = styled.div`
    margin: 1rem ;
    display: grid ;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 6rem ;
        border-radius: 0.65rem ;
        background-color: var(--shape);
        margin: 1rem auto ;
        cursor: pointer ;
        transition: background-color 1s ease ;
        

        &:hover {
        background-color: var(--green) ;
        }

        img {
            margin-bottom: 1.5rem;
            max-width: 3rem ;
        }
        
    }

`