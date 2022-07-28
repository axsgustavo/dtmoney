import { darken, transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.form `
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 3.5rem;
    padding: 0 1.5rem;

    border: 1px solid #D7D7D7;
    border-radius: 0.25rem;
    background-color: #E7E9EE;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    margin-top: 1rem;
    padding: 0 1.5rem;

    border: none;
    border-radius: 0.25rem;
    background-color: var(--green);

    color: #FFF;
    font-size: 1rem;
    transition: filter .2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
  
`

export const TransactionTypeContainer = styled.div`
  width: 100%;
  height: 3.5rem;
  margin: 1rem 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
  width: 100%;
  border: 1px solid #D7D7D7;
  border-radius: 0.25rem;
  background-color: ${props => props.isActive 
    ? transparentize(0.9, colors[props.activeColor])
    : 'transparent'
  };
  transition: border 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--text-title);

  img {
    height: 20px;
    margin-right: 0.5rem;
  }

  &:hover {
    border: 1px solid ${darken(0.1, '#D7D7D7')};
  }
`;