import React from 'react'
import { useState } from "react"
import {useNavigate} from "react-router-dom";

const PopupAddBook = props => {


  /*
 const[userData, setUserData] = useState({
        email:"",
        password: "",
    });
  */
  const[addData, setAddData] = useState({
    name:"",
    author: "",
    category: "",
});

let navigate = useNavigate();

function handleInput(e){
    let newAddData = addData;
    newAddData[e.target.name] = e.target.value;
    console.log(newAddData)
   setAddData(newAddData);
}

function handleAdding(e){
  e.preventDefault();
  /*axios.post("api/add", addData).then(res=>{
      console.log(res.data);
      navigate("/add");
  }).catch(e=>{
      console.log(e)
  });
*/
}
  return (
      <div className='popupAdd'>
      <div className='boxAdd'>
    
 
      <div class="add_book">
            <form onSubmit={handleAdding}>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" id="form3Example3" className="form-control form-control-lg" name="name" onInput={handleInput}/>
                </div>
                <div class="form-group">
                    <label>Author</label>
                    <input type="text" id="form3Example3" className="form-control form-control-lg" name="author" onInput={handleInput}/>
                </div>
                <div class="form-group">
                    <label>Category</label>
                    <input type="text" id="form3Example3" className="form-control form-control-lg" name="category" onInput={handleInput}/>
                </div>    
                <div className="text-center text-lg-start mt-2 pt-2">
                <button type="submit" className="add_btn"  onClick={props.handleClose}>Add</button>
                </div>
            </form>        
        </div>
      </div>
    </div>
  )
}

export default PopupAddBook
