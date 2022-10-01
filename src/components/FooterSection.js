import styled from "styled-components";
import flashcardVector from "../flashcard";
import sad from "../assets/img/sad.png";
import party from "../assets/img/party.png";
export default function FooterSection({
  count,
  showIcons,
  showGoal,
  goalInput,
  goalFail,
  goalSuccess,
  chosenDeck,
}) {
  return (
    <Footer>
      <span data-identifier="flashcard-counter"> 
        {count}/{flashcardVector[Number(chosenDeck)].length} Concluídos / Meta:
        {showGoal}/{goalInput}
      </span>{" "}
      <br></br>
      {goalFail && (
        <span>
          Putz <img src={sad} alt="sad" />
        </span>
      )}
      {goalSuccess && (
        <span>
          Parabéns, você alcançou a sua meta <img alt="happy" src={party} />
        </span>
      )}
      <div>
        {showIcons.map((icon, index) => (
          <IconBox key={index} status={icon}>
            <ion-icon name={icon}></ion-icon>
          </IconBox>
        ))}
      </div>
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
    margin-top: 4px;
  }
`;

const IconBox = styled.div`
  font-size: 25px;
  color: ${(props) => {
    if (props.status === "close-circle") {
      return "red";
    } else if (props.status === "help-circle") {
      return "#ff922e";
    } else if (props.status === "checkmark-circle") {
      return " #2fbe34";
    }
  }};
`;
