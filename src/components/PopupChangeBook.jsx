import React from 'react'
import { useState } from "react"
import {useNavigate} from "react-router-dom";

const PopupChangeBook = props => {

  const[changeData, setChangeData] = useState({
    name:"",
    author: "",
    category: "",
});

let navigate = useNavigate();

function handleInput(e){
    let newChangeData = changeData;
    newChangeData[e.target.name] = e.target.value;
    console.log(newChangeData)
   setChangeData(newChangeData);
}

function handleChanging(e){
  e.preventDefault();
  /*axios.post("api/change", changeData).then(res=>{
      console.log(res.data);
      navigate("/change");
  }).catch(e=>{
      console.log(e)
  });
*/
}
  return (
      <div className='popupChange'>
      <div className='boxChange'>
      <div class="change_book">
            <form onSubmit={handleChanging}>
                <div class="form-group">
                    <label>Book</label>
                    <input type="text" id="form3Example3" className="form-control form-control-lg" name="name" placeholder="Write a title of the book you want to change." onInput={handleInput}/>
                </div>
                <div class="form-group">
                    <label>New title</label>
                    <input type="text" id="form3Example3" className="form-control form-control-lg" name="title" onInput={handleInput}/>
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
                <button type="submit" className="change_btn"  onClick={props.handleCloseChange}>Change</button>
                </div>
            </form>        
        </div>
      </div>
    </div>
  )
}

export default PopupChangeBook
