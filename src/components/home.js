import styled from "styled-components";
import Homelogo from "../assets/img/logo.png";

export default function Homescreen({setStartReview}) {
  return (
    <Main>
      <figure>
        <img src={Homelogo} />
      </figure>
      <h1>ZapRecall</h1>
    <ButtonHome onClick={()=> setStartReview(true)}>Inicial recall</ButtonHome>
    </Main>
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
    margin-bottom:20px;
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
`;

const ButtonHome = styled.div`
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  border: 1px solid  #D70900;
  color: #D70900;
  border-radius: 3px;
  background-color: white;
  width:264px;
  height:54px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:32px;
`;
