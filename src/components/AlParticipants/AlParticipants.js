import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Participants from "../Participants/Participants"
import './AlParticipants.css';
const AlParticipant = () =>{
    const [users, setUsers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
       fetch('./tools.JSON')
      .then(res => res.json())
      .then(data =>setUsers(data));
    },[])      
const  handleAddToCart = (user)=>
{
    const newCart = [...cart, user];
    setCart(newCart);
}
console.log(cart);
return(
    <section id="team">
    <div className="col-md-9 user-container left-side ms-3  my-3 py-5 text-center">
    <div className="row gy-5">
        {users.map((user)=>(
         <Participants
         key={user.key}
         user={user}
           handleAddToCart={ handleAddToCart}>
         </Participants>
        ))}
    </div>
 </div>
   <div className="col-md-3 cart-container">
   <Cart cart={cart}></Cart>
  </div>
</section>    
    );
  };
  
export default AlParticipant;








