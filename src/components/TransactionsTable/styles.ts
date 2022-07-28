import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      padding: 1rem 2rem;

      color: var(--text-body);
      font-weight: 400;
      text-align: left;
      line-height: 1.5rem;
    }
    
    td {
      padding: 1rem 2rem;
      border: 0;
      background-color: var(--shape);
      color: var(--text-body);

      &:first-child {
        border-radius: 0.25rem 0 0 0.25rem;
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }

      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }
    }
  }

  @media screen and (max-width: 720px) {
    margin-top: 3rem;
    overflow-x: auto; 

    ::-webkit-scrollbar {
      height: 4px;
      background: transparent;
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: #D9D9D9;
      border-radius: 50px;
    }

    table {
      th {
        padding: 1rem;
      }
      
      td {
        width: fit-content;
        padding: 1rem;

        &:first-child {
          flex: 1;
          width: 100%;
          max-width: 200px;

          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
`;