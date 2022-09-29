import GloboStyle from "../Globostyle";
import styled from "styled-components";
import HeaderSection from "./HeaderSection";
import Deck from "./Deck";
import FooterSection from "./FooterSection";
import { useState } from "react";
import flashcardVector from "../flashcard";

const assistent = flashcardVector.map(p =>'status');

export default function App() {
const [statusSaved, setStatusSaved] = useState([...assistent])
const [isAvailable, setIsAvailable] = useState(true);
const [count, setCount] = useState(0)

  return (
    <>
      <GloboStyle />
      <ScreenBox>
        <HeaderSection />
        <Deck  statusSaved={statusSaved} count={count}setCount={setCount}setStatusSaved={setStatusSaved} isAvailable={isAvailable} setIsAvailable={setIsAvailable}  />
        <FooterSection count={count} />
      </ScreenBox>
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

