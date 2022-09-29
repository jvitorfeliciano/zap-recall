import styled from "styled-components";
import Homelogo from "../assets/img/logo.png";
import flashcardVector from "../flashcard";
export default function Homescreen({setStartReview,goalInput, setGoalInput}) {
  function validateGoal(){
    if(Number(goalInput<1)){
      alert('A meta mínima é igual a 1 ')
      return
    }
    else if(Number(goalInput>flashcardVector.length)){
      alert(`A meta máxima é de ${flashcardVector.length}`)
    }
    else {
      setStartReview(true)
    }
  }
  return (
    <Main>
      <figure>
        <img src={Homelogo} />
      </figure>
      <h1>ZapRecall</h1>
      <input type="number" value={goalInput} onChange ={(e) => setGoalInput(e.target.value)} placeholder="Digite sua meta de zaps"min="1" max={flashcardVector.length}/>
     {/*   <select name="select"  placeholder="Escolha o seu deck">
         <option value="valor1">Reactjs</option>
        <option value="valor2">Javascript</option>
        <option value="valor3">Valor 3</option>
      </select>  */}
    <ButtonHome  onClick={validateGoal}>Iniciar recall</ButtonHome>
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
  input{
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      border-radius: 5px;
      border:none;
      padding-left: 10px;
      width:264px;
      height:43px;
      margin-top:36px;
      &:focus{
        outline:none;
      }
    }
`;

const ButtonHome = styled.button`
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  border: 1px solid  #D70900;
  color: #D70900;
  border-radius: 5px;
  background-color: white;
  width:264px;
  height:54px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top:18px;
`;
