import flashcardVector from "../flashcard";
import CardStructure from "./Card";

export default function Deck({
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
  chosenDeck,
  questionNumber,
  setQuestionNumber,showIcons
}) {
  return (
    <div>
      {flashcardVector[Number(chosenDeck)].map((card, index) => (
        <CardStructure
          key={index}
          statusSaved={statusSaved}
          isAvailable={isAvailable}
          setIsAvailable={setIsAvailable}
          setStatusSaved={setStatusSaved}
          count={count}
          setCount={setCount}
          setShowIcons={setShowIcons}
          goalInput={goalInput}
          setShowGoal={setShowGoal}
          setGoalFail={setGoalFail}
          setGoalSucess={setGoalSucess}
          index={index}
          card={card}
          chosenDeck={chosenDeck}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          showIcons={showIcons}
        />
      ))}
    </div>
  );
}
