import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    height: 3rem;
    padding: 0 2rem;
    border: 0;
    border-radius: 0.25rem;
    background-color: var(--blue-light);
    transition: filter 0.2s;

    color: #FFF;
    font-size: 1rem;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media screen and (max-width: 720px) {
    padding: 2rem 1rem;

    img {
      height: 2.4rem;
    }
  }
`;