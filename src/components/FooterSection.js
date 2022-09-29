import styled from "styled-components";
import flashcardVector from "../flashcard";

export default function FooterSection({count}) {
  
  
  return (
    <Footer>
      
      <span>{count}/{flashcardVector.length} Concluidos</span>
    </Footer>
  );
}

const Footer = styled.footer`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;


`;


