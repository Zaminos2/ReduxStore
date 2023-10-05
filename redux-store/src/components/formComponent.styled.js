import styled, { createGlobalStyle } from "styled-components";

export const FormWrap = styled.div`
  width: 40em;
  background-color: rgb(232, 234, 236);
  border-radius: 16px;
  box-shadow: 5px 5px 8px black;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Global = createGlobalStyle`
    body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height:100vh;
        background-color: rgb(224, 250, 241);
    }
`;
export const MyForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  gap:2rem;
  

  & input[type="submit"] {
    border-radius: 15px;
    width:5rem;
  }
`;
