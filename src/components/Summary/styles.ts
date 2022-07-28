import styled from "styled-components";

export const Container = styled.div`
  margin-top: -8rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  div {
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    background: var(--shape);
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 400;
      line-height: 3rem;

      span {
        font-weight: 500;
      }
    }

    &.highlight-background {
      background-color: var(--green);
      color: #fff;
    }
  }

  @media screen and (max-width: 720px) {
    margin-top: 0;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;

    div {
      padding: 1rem;
      border-bottom: 4px solid rgba(0, 0, 0, 0.10);

      strong {
      margin-top: 0;
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 2rem;

      span {
        font-weight: 500;
      }
    }
    }
  }
`;