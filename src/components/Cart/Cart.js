import React from "react";
import './Cart.css'; 
const Cart = ({cart}) =>{
     console.log(cart);
    //   const {cart} = props;
    let totalMember = 0;

     let name='';let age='';let role='';let gender='';

     for(const member of cart)
     { console.log(member);
        totalMember = totalMember +  member.salary;

        name=  member.name;
        role=  member.role;
        gender=  member.gender;
        age=  member.age;  
     }
    return(
        <div>
        <div className="m-5">
           <h4>Participant Details:</h4>
           {/* <h5>Single Member: {props.cart.length}</h5> */}
           <br />
           <p>TotalSalary: {totalMember}</p>
        </div>
        <div className="col m-3">
        <div className="card h-100">
        <div className="card-body">
            <h4>Name: {name}</h4>
            <h6>Role: {role}</h6>
            <h6>Gender: {gender}</h6>
            <h6>Age: {age}</h6>
        </div>
        </div>
        </div>  
        </div>
    );
};
export default Cart;


























//  let totalMember = 0;
//  for(const member of cart){
    // totalMember = totalMember +  props.info.salary;
//  }
//  const {name, role, gender, age, salary} = props.info;
// return(
//     <div>
//     <div className="m-5">
//        <h4>Participant Details:</h4>
//        <h5>Single Member: {props.info.length}</h5>
//        <br />
//        <p>TotalSalary: {totalMember}</p>
    {/* </div> */}