import styled from "styled-components";
import Homelogo from "../assets/img/logo.png";
import flashcardVector from "../flashcard";
export default function Homescreen({
  setStartReview,
  goalInput,
  setGoalInput,
  chosenDeck,
  setChosenDeck,
  setStatusSaved,
  setQuestionNumber,setShowIcons
}) {
  function validateGoal() {
    if (Number(goalInput < 1)) {
      alert("A meta mínima é igual a 1 ");
      return;
    } else if (Number(goalInput > flashcardVector[Number(chosenDeck)].length)) {
      alert(`A meta máxima é de ${flashcardVector[Number(chosenDeck)].length}`);
    } else {
      const questionNumberAdress = flashcardVector[Number(chosenDeck)].map(
        (q, index) => index
      );
      setQuestionNumber([...questionNumberAdress]);
      const assistent = flashcardVector[Number(chosenDeck)].map(
        (p) => "status"
      );
      setStatusSaved([...assistent]);
      setStartReview(true);
      const aux = flashcardVector[Number(chosenDeck)].map(p =>"ellipse-outline")
      setShowIcons(aux)
    }
  }

  return (
    <>
      {chosenDeck === undefined && (
        <Main>
          <figure>
            <img src={Homelogo} alt="logo" />
          </figure>
          <h1>ZapRecall</h1>
          <select   data-identifier="deck-selector" name="select" onChange={(e) => setChosenDeck(e.target.value)}>
            <option data-identifier="deck-option" value="valor1" disabled selected>
              Escolha o seu Deck
            </option>
            <option data-identifier="deck-option" value="0">React</option>
            <option  data-identifier="deck-option" value="1">Física</option>
          </select>
          <ButtonHome data-identifier="start-btn"
            disabled={goalInput === ""}
            allowButton={goalInput === ""}
          >
            Iniciar recall
          </ButtonHome>
        </Main>
      )}

      {chosenDeck !== undefined && (
        <Main>
          <figure>
            <img src={Homelogo} alt="logo" />
          </figure>
          <h1>ZapRecall</h1>
          <input data-identifier="goals-input"
            type="number"
            value={goalInput}
            onChange={(e) => setGoalInput(e.target.value)}
            placeholder="Digite sua meta de zaps"
            min="1"
            max={flashcardVector[Number(chosenDeck)].length}
          />
          <ButtonHome data-identifier="start-btn"
            disabled={goalInput === ""}
            allowButton={goalInput === ""}
            onClick={validateGoal}
          >
            Iniciar recall
          </ButtonHome>
        </Main>
      )}
    </>
  );
}

const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fb6b6b;
  figure {
    width: 136px;
    height: 161px;
    margin-bottom: 20px;
    img {
      width: 100%;
      height: auto;
    }
  }
  h1 {
    font-family: "Righteous";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #ffffff;
    margin-left: 20px;
  }
  input {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    border-radius: 5px;
    border: none;
    padding-left: 10px;
    width: 264px;
    height: 43px;
    margin-top: 36px;
    &:focus {
      outline: none;
    }
  }
  select {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    border-radius: 5px;
    border: none;
    padding-left: 10px;
    width: 264px;
    height: 43px;
    margin-top: 36px;
    &:focus {
      outline: none;
    }
  }
`;

const ButtonHome = styled.button`
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  border: 1px solid #d70900;
  color: #d70900;
  border-radius: 5px;
  background-color: white;
  width: 264px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
  opacity: ${(props) => (props.allowButton === true ? "0.3" : "1")};
  cursor:pointer;
`;
