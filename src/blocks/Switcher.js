import { useContext } from "react"
import styled from "styled-components";
import { ButtonSecondary } from "../collections/Buttons";
import { UserContext } from "../contexts/UserContext";

const Switcher = ({className})=>{
  let [user,setUser] = useContext(UserContext);
  
  let switchDevUsername = ()=>{
    let newUsername = user.devToUsername === "marasco19" ? "varshadusa" : "marasco19" 
    setUser({...user,devToUsername: newUsername });
  }

  return (
    <div className={className}>
      <p>
        También puedes
        <ButtonSecondary onClick={switchDevUsername}>
          cambiar a ver los
          {
            user.devToUsername === "marasco19" ? " de mi empresa" : " míos"
          }
        </ButtonSecondary>
      </p>
    </div>
  )
};

export default styled(Switcher)`
  button{
    margin-left: 0.2rem;
  }
`;