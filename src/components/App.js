import GloboStyle from "../Globostyle";
import styled from "styled-components";
import HeaderSection from "./HeaderSection";
import Deck from "./Deck";
import Homescreen from "./home";
import FooterSection from "./FooterSection";
import { useState } from "react";

export default function App() {
  const [chosenDeck, setChosenDeck] = useState();
  const [statusSaved, setStatusSaved] = useState();
  const [isAvailable, setIsAvailable] = useState(true);
  const [count, setCount] = useState(0);
  const [startReview, setStartReview] = useState(false);
  const [showIcons, setShowIcons] = useState([]);
  const [goalInput, setGoalInput] = useState("");
  const [showGoal, setShowGoal] = useState(0);
  const [goalSuccess, setGoalSucess] = useState(false);
  const [goalFail, setGoalFail] = useState(false);
  const [questionNumber, setQuestionNumber] = useState([]);

  return (
    <>
      {startReview ? (
        <>
          <GloboStyle />
          <ScreenBox>
            <HeaderSection />
            <Deck
              statusSaved={statusSaved}
              count={count}
              setCount={setCount}
              setStatusSaved={setStatusSaved}
              isAvailable={isAvailable}
              setIsAvailable={setIsAvailable}
              setShowIcons={setShowIcons}
              showIcons={showIcons}
              goalInput={goalInput}
              setShowGoal={setShowGoal}
              setGoalFail={setGoalFail}
              setGoalSucess={setGoalSucess}
              chosenDeck={chosenDeck}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
            />
            <FooterSection
              count={count}
              showIcons={showIcons}
              showGoal={showGoal}
              goalInput={goalInput}
              goalFail={goalFail}
              goalSuccess={goalSuccess}
              chosenDeck={chosenDeck}
             
            />
          </ScreenBox>
        </>
      ) : (
        <>
          <GloboStyle />
          <Homescreen
            setStartReview={setStartReview}
            goalInput={goalInput}
            setGoalInput={setGoalInput}
            startReview={startReview}
            chosenDeck={chosenDeck}
            setChosenDeck={setChosenDeck}
            statusSaved={statusSaved}
            setStatusSaved={setStatusSaved}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            setShowIcons={setShowIcons}
          />
        </>
      )}
    </>
  );
}

const ScreenBox = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
