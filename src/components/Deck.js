import styled from "styled-components";
import play from "../assets/img/play-outline-icon.svg";
import seta from "../assets/img/setinha.png";
import flashcardVector from "../flashcard";
import { useState } from "react";

// abrir os cards um por vez;
let counter =0;
let goalCounter=0;
const questionNumberAdress = flashcardVector.map((q, index) => index);
let flippedAdress = [];
let questionAdressVector = [];
let answerAdress = [];
let iconVector=[];

export default function Deck({
  statusSaved,
  isAvailable,
  setIsAvailable,
  setStatusSaved,
  count, setCount, setShowIcons, goalInput,  setShowGoal, setGoalFail,setGoalSucess
}) {
  const [questionNumber, setQuestionNumber] = useState(questionNumberAdress);
  const [hasChanging, setHasChanging] = useState(false);

  function selectQuestion(adress) {
    if (isAvailable === false) {
      return;
    }
    const aux = [...statusSaved];
    aux[Number(adress)] = Number(adress);
    setStatusSaved([...aux]);

    flippedAdress = [...flippedAdress, adress];
    console.log(flippedAdress);
    questionNumberAdress.splice(adress, 1, "");
    setQuestionNumber([...questionNumberAdress]);
    questionAdressVector = [...questionAdressVector, adress];
    setIsAvailable(false);
  }

  function showAnswer(adress) {
    questionAdressVector = [];
    answerAdress = [...answerAdress, adress];
    setHasChanging(!hasChanging);

    console.log("teste");
  }

  function RenderStages(p, cardAdress) {
    if (questionNumber.includes(cardAdress)) {
      return (
        <HiddenQuestion key={cardAdress}>
          <span>Pergunta {cardAdress + 1}</span>
          <img
            onClick={() => selectQuestion(cardAdress)}
            src={play}
            alt="play"
          />
        </HiddenQuestion>
      );
    } else if (questionAdressVector.includes(cardAdress)) {
      questionAdressVector = [];
      return (
        <RevealedQuestion key={cardAdress}>
          <span>{p.Q}</span>
          <img src={seta} onClick={() => showAnswer(cardAdress)} alt="arrow" />
        </RevealedQuestion>
      );
    } else if (answerAdress.includes(cardAdress)) {
      answerAdress = [];
      return (
        <RevealedQuestion key={cardAdress}>
          <span>{p.R}</span>
            < ButtonContainer>
              <ErrorButton onClick={() => assessment("error")} type="button">
                Não lembrei
              </ErrorButton>
              <AlmostButton onClick={() => assessment("almost")} type="button">
                Quase não lembrei
              </AlmostButton>
              <ZapButton onClick={() => assessment("zap")} type="button">
                Zap!
              </ZapButton>
            </ ButtonContainer>
      
        </RevealedQuestion>
      );
    } else if (flippedAdress.length !== 0) {
      return (
        <HiddenQuestion key={cardAdress} status={statusSaved[cardAdress]}>
          <h1>Pergunta {cardAdress + 1}</h1>
          <ion-icon
            name={
              statusSaved[cardAdress] === "error"
                ? "close-circle"
                : statusSaved[cardAdress] === "almost"
                ? "help-circle"
                : "checkmark-circle"
            }
          ></ion-icon>
        </HiddenQuestion>
      );
    }
  }
  function assessment(status){
    counter++
    if(status==='zap'){
        goalCounter++
     if(goalCounter<= Number(goalInput)){
      setShowGoal(goalCounter)   
    }
  }
    iconVector=[...iconVector,status]
    const aux = [...statusSaved]
    for(let i=0; i<statusSaved.length; i++){
      if(!isNaN(statusSaved[i])){
        aux[i]=status
        setCount(count+1)
      }
    }
    console.log(iconVector)
    if(counter===flashcardVector.length){
      const aux2 = iconVector.map(p=>{
        if(p==='zap'){
          return "checkmark-circle"
        }
        else if(p==='error'){
          return "close-circle"
        }
        else if(p==='almost'){
          return "help-circle"
        }
      })
      setShowIcons([...aux2])
    }
     if (counter===flashcardVector.length){
      if(goalCounter >= Number(goalInput)){
        setGoalSucess(true)
      }
      else {
        setGoalFail(true)
      }
     }
        
       
   setIsAvailable(true)
   setStatusSaved([...aux])
   console.log(statusSaved)
   console.log(counter)
  }

  return <>{flashcardVector.map((p, index) => RenderStages(p, index))}</>;
}

const HiddenQuestion = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  span {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  img {
    position: absolute;
    bottom: 7px;
    right: 8px;
    width: 20px;
    height: 20px;
    color: #333333;
  }
  ion-icon {
    position: absolute;
    bottom: 5px;
    right: 7px;
    font-size: 25px;
    color: ${(props) =>
      props.status === "error"
        ? "red"
        : props.status === "almost"
        ? "#ff922e"
        : " #2fbe34"};
  }
  h1 {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) =>
      props.status === "error"
        ? "red"
        : props.status === "almost"
        ? "#ff922e"
        : " #2fbe34"};
    text-decoration: line-through;
  }
  div{
    
  }
`;
const ButtonContainer =styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin-bottom:-10px;
    margin-top:8px;
`
const RevealedQuestion = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

const Button = styled.button`
  width: 80px;
  cursor: pointer;
  height: 37px;
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
