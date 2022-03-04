import styled from 'styled-components';

export const Container = styled.td`
            display: flex;
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;
            cursor: pointer;
            transition: padding 0.5s ease;

            &:first-child {
              color: var(--text-title);
            }

            &.deposit {
            color: var(--green);
            }

            &.withdraw {
                color: var(--red);
            }

            &:hover {
             padding: 2rem 3rem;
             opacity: 0.6;
             color: #fff;
             background: var(--green);
            }
            p{
                text-decoration: none;
            }
  
`;
