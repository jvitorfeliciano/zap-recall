import styled from "styled-components";
import flashcardVector from "../flashcard";
import {useState} from "react"

export default function FooterSection({statusSaved, setStatusSaved, isAvailable, setIsAvailable}) {
  const [count, setCount] = useState(0)

  function assessment(status){
    const aux = [...statusSaved]
    for(let i=0; i<statusSaved.length; i++){
      if(!isNaN(statusSaved[i])){
        aux[i]=status
        setCount(count+1)
      }
    }
  setIsAvailable(true)
  setStatusSaved([...aux])
   console.log(statusSaved)
  }
  
  return (
    <Footer>
      <div>
        <ErrorButton onClick={()=>assessment('error')}type="button">Não lembrei</ErrorButton>
        <AlmostButton onClick={()=>assessment('almost')} type="button">Quase não lembrei</AlmostButton>
        <ZapButton onClick={()=>assessment('zap')} type="button">Zap!</ZapButton>
      </div>
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

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 20px;
  }
`;

const Button = styled.button`
  width: 90px;
  cursor: pointer;
  height: 40px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: blue;
  border-radius: 5px;
  border: none;
  padding: 5px;
  &:hover {
    filter: brightness(0.7);
  }
`;

const ZapButton = styled(Button)`
  background-color: #2fbe34;
`;
const AlmostButton = styled(Button)`
  background-color: #ff922e;
`;

const ErrorButton = styled(Button)`
  background-color: #ff3030;
`;

