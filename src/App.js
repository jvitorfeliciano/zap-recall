import GloboStyle from "./Globostyle";
import styled from "styled-components";

import logo from "./assets/img/logo.png";
import play from "./assets/img/play-outline-icon.svg";
import seta from "./assets/img/setinha.png";

export default function App() {
  return (
    <>
      <GloboStyle />
      <ScreenBox>
        <Header>
          <figure>
            <img src={logo} alt="logo" />
          </figure>
          <h1>ZapRecall</h1>
        </Header>
        <HiddenQuestion>
          <span>Pergunta 1</span>
          <img src={play} alt="play" />
        </HiddenQuestion>
        <RevealedQuestion>
          <span>O que é Jsx?</span>
          <img src={seta} alt="arrow" />
        </RevealedQuestion>
        <Footer>
          <div>
            <ErrorButton type="button">Não lembrei</ErrorButton>
            <AlmostButton type="button">Quase não lembrei</AlmostButton>
            <ZapButton type="button">Zap!</ZapButton>
          </div>
          <span>0/4 Concluidos</span>
        </Footer>
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

const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img {
    width: 52px;
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
`;
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
  }
`;
