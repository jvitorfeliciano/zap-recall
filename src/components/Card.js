import styled from "styled-components";
import { useState } from "react";
import play from "../assets/img/play-outline-icon.svg";
import seta from "../assets/img/setinha.png";
import flashcardVector from "../flashcard";

let counter = 0;
let goalCounter = 0;
let flippedAdress = [];
let questionAdressVector = []; // essas variáveis não mudam seu valor quando há mudanças de estados, permanecem com seus valores;
let answerAdress = [];
let iconVector = [];

export default function CardStructure({
  statusSaved,
  isAvailable,
  setIsAvailable,
  setStatusSaved,
  count,
  setCount,
  setShowIcons,
  goalInput,
  setShowGoal,
  setGoalFail,
  setGoalSucess,
  index,
  card,
  chosenDeck,
  setQuestionNumber,
  questionNumber,
  showIcons,
}) {
  const [hasChanging, setHasChanging] = useState(false);

  function selectQuestion(index) {
    if (isAvailable === false) {
      return;
    }
    const aux = [...statusSaved];
    aux[index] = index;
    setStatusSaved([...aux]);

    flippedAdress = [...flippedAdress, index];
    console.log(flippedAdress);
    const aux3 = [...questionNumber];
    aux3.splice(index, 1, "");
    setQuestionNumber([...aux3]);
    questionAdressVector = [...questionAdressVector, index];
    setIsAvailable(false);
  }

  function showAnswer(index) {
    questionAdressVector = [];
    answerAdress = [...answerAdress, index];
    setHasChanging(!hasChanging);
    console.log("teste");
  }
  function assessment(status) {
    counter++;
    if (status === "zap") {
      goalCounter++;
      if (goalCounter <= Number(goalInput)) {
        setShowGoal(goalCounter);
      }
    }
    const aux = [...statusSaved];
    iconVector = [...showIcons];
    for (let i = 0; i < statusSaved.length; i++) {
      if (!isNaN(statusSaved[i])) {
        aux[i] = status;
        if (status === "zap") {
          iconVector[i] = "checkmark-circle";
        } else if (status === "error") {
          iconVector[i] = "close-circle";
        } else if (status === "almost") {
          iconVector[i] = "help-circle";
        }
        setCount(count + 1);
      }
    }
    setShowIcons([...iconVector]);

    if (counter === flashcardVector[Number(chosenDeck)].length) {
      if (goalCounter >= Number(goalInput)) {
        setGoalSucess(true);
      } else {
        setGoalFail(true);
      }
    }

    setIsAvailable(true);
    setStatusSaved([...aux]);
    console.log(statusSaved);
    console.log(counter);
  }

  if (questionNumber.includes(index)) {
    return (
      <HiddenQuestion data-identifier="flashcard">
        <span>Pergunta {index + 1}</span>
        <img data-identifier="flashcard-show-btn" onClick={() => selectQuestion(index)} src={play} alt="play" />
      </HiddenQuestion>
    );
  } else if (questionAdressVector.includes(index)) {
    questionAdressVector = [];
    return (
      <RevealedQuestion data-identifier="flashcard">
        <span data-identifier="flashcard-question">{card.Q}</span>
        <img data-identifier="flashcard-turn-btn" src={seta} onClick={() => showAnswer(index)} alt="arrow" />
      </RevealedQuestion>
    );
  } else if (answerAdress.includes(index)) {
    answerAdress = [];
    return (
      <RevealedQuestion data-identifier="flashcard">
        <span data-identifier="flashcard-answer">{card.R}</span>
        <ButtonContainer>
          <ErrorButton data-identifier="forgot-btn" onClick={() => assessment("error")} type="button">
            Não lembrei
          </ErrorButton>
          <AlmostButton data-identifier="almost-forgot-btn" onClick={() => assessment("almost")} type="button">
            Quase não lembrei
          </AlmostButton>
          <ZapButton data-identifier="zap-btn" onClick={() => assessment("zap")} type="button">
            Zap!
          </ZapButton>
        </ButtonContainer>
      </RevealedQuestion>
    );
  } else if (flippedAdress.length !== 0) {
    return (
      <HiddenQuestion data-identifier="flashcard" status={statusSaved[index]}>
        <h1>Pergunta {index + 1}</h1>
        <ion-icon  data-identifier="flashcard-status"
          name={
            statusSaved[index] === "error"
              ? "close-circle"
              : statusSaved[index] === "almost"
              ? "help-circle"
              : "checkmark-circle"
          }
        ></ion-icon>
      </HiddenQuestion>
    );
  }
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
  cursor:pointer;

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
    cursor:pointer;
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
  div {
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: -10px;
  margin-top: 8px;
`;
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
    cursor:pointer;
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
