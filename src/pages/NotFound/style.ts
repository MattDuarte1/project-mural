import styled from 'styled-components';

export const Container = styled.div`
  button {
        margin-top: 2rem;
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
`;
