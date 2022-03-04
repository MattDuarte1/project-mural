import styled from 'styled-components';

export const Container = styled.div`
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

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
            display: flex;

            p  {
              margin-right: 5rem;
            }
        }

    }
  
`;
