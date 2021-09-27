import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import  './Participants.css';
const Participants = (props) =>{
//  console.log(props.user);
    const {name, img,role, gender, age,salary} = props.user;
// fontAwesome
    const cartIcon = <FontAwesomeIcon icon={faArrowRight} />
    return(
<div className="col-lg-4 col-md-6">
     <div className="card h-100">
         <div className="card-body">
           <img  src={img} alt="" className="img-fluid rounded-circle w-50 mb-3"/>
           <div className="card-text">
           <h4>Name: {name}</h4>
           <h6>Gender: {gender}</h6>
           <h6>Role: {role}</h6>
           <h6>Age: {age}</h6>
           <h5>Salary: {salary}</h5>
           </div>
          </div>
          <div className="control">
          <div>
              <i className="fab fa-facebook"></i>
              </div>
              <div>
              <i className="fab fa-youtube"></i>
               </div>
               <div>
              <i className="fab fa-instagram"></i>
          </div>
          </div>
           <button className="text-uppercase show text-center text-white mt-3 "
           onClick={() => props.handleAddToCart(props.user)}>{cartIcon} Add to Cart
           </button>
           </div>
       </div>  
    );
};
export default Participants;

          
           
          
         
      