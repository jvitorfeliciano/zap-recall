import styled from "styled-components";
import flashcardVector from "../flashcard";
import sad from "../assets/img/sad.png"
import party from "../assets/img/party.png"
export default function FooterSection({count,showIcons, showGoal,goalInput,goalFail, goalSuccess}) {
  
  
  return (
  
    <Footer>
      <span>{count}/{flashcardVector.length} Concluídos</span>
      <span>Meta:{showGoal}/{goalInput}</span> 
      {goalFail && (<span>Putz <img src={sad}/></span>)}
      {goalSuccess && (<span>Parabéns, você alcançou a sua meta <img src={party}/></span>)}
      <div>{showIcons.map((icon,index)=><IconBox key={index}status={icon}><ion-icon  name={icon}></ion-icon></IconBox>
)}</div>
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
  div{
    display:flex;
    margin-top:4px;
  }

`;

const IconBox=styled.div`
  
   font-size: 25px;
   color: ${(props) =>
      props.status === "close-circle"
        ? "red"
        : props.status === "help-circle"
        ? "#ff922e"
        : " #2fbe34"};
`


