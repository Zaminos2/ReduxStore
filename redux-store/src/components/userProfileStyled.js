import styled from "styled-components";

export const ProfileWrap = styled.div`
width: 40em;
height: 70vh;
background-color: rgb(232, 234, 236);
border-radius: 16px;
box-shadow: 5px 5px 8px black;
padding: 2rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
left: 0;
z-index: 0;
`;
export const AccordionWrap = styled.div`
overflow: scroll;
`;
export const CloseButton = styled.button`
border-radius: 50%;
padding: 1rem;
font-size: 16px;
border: none;
position: absolute;
right: -1rem;
top: -1rem;
z-index: 1;

`;