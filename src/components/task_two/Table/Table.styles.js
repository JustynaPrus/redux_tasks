import styled from "styled-components";

export const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  width: 50vw;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .sort {
    background-color: aquamarine;
  }
`;
