
import { useNavigate } from "react-router-dom";
import { MenuWrap,ButtonWrap,CloseButton } from "./menuComponent.styled";

function MenuComponent(){
    
    const userData =JSON.parse(localStorage.getItem('user'));
   const navigate = useNavigate();
    return(
        <MenuWrap>
            <CloseButton onClick={()=>{navigate('/')}}>x</CloseButton>
            <h2>Welkome {userData.name}</h2>
            <ButtonWrap>
                <button onClick={()=>{navigate('/userProfile')}}>User Profile</button>
                <button>Product List</button>
                <button>Basket</button>
            </ButtonWrap>
        </MenuWrap>
    )
}
export default MenuComponent;