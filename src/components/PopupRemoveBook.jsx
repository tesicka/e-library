import React from 'react'
import { useState } from "react"
import {useNavigate} from "react-router-dom";


const PopupRemoveBook = props => {

    const[removeData, setRemoveData] = useState({
        name:"",
    });

    let navigate = useNavigate();

function handleInput(e){
    let newRemoveData = removeData;
    newRemoveData[e.target.name] = e.target.value;
    console.log(newRemoveData)
   setRemoveData(newRemoveData);
}

function handleRemoving(e){
  e.preventDefault();
  /*axios.post("api/remove", removeData).then(res=>{
      console.log(res.data);
      navigate("/remove");
  }).catch(e=>{
      console.log(e)
  });
*/
}


return (
    <div className='popupRemove'>
    <div className='boxRemove'>
    <div class="remove_book">
          <form onSubmit={handleRemoving}>
              <div class="form-group">
                  <label>Book</label>
                  <input type="text" id="form3Example3" className="form-control form-control-lg" name="name" placeholder="Write a title of the book you want to remove." onInput={handleInput}/>
              </div>   
              <div className="text-center text-lg-start mt-2 pt-2">
              <button type="submit" className="remove_btn"  onClick={props.handleClose}>Remove</button>
              </div>
          </form>        
      </div>
    </div>
  </div>
)
}

export default PopupRemoveBook
