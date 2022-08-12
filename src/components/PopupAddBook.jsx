import React from 'react'

const PopupAddBook = props => {

 /* const[userData, setUserData] = useState({
    email:"",
    password: "",
});
let navigate = useNavigate();
function handleInput(e){
    let newUserData = userData;
    newUserData[e.target.name] = e.target.value;
   // console.log(newUserData)
   setUserData(newUserData);
}
function handleLogin(e){
    e.preventDefault();
    axios.post("api/login", userData).then(res=>{
        console.log(res.data);
        if(res.data.success === true){
            window.sessionStorage.setItem("auth_token", res.data.access_token);
            addToken(res.data.access_token);
            navigate("/");
        }
    }).catch(e=>{
        console.log(e)
    });
}*/

  return (
      <div className='popupAdd'>
      <div className='boxAdd'>
    
 
      <div class="add_book">
            <form>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" id="form3Example3" className="form-control form-control-lg" name="name"/>
                </div>
                <div class="form-group">
                    <label>Author</label>
                    <input type="text" id="form3Example3" className="form-control form-control-lg" name="author"/>
                </div>
                <div class="form-group">
                    <label>Category</label>
                    <input type="text" id="form3Example3" className="form-control form-control-lg" name="category"/>
                </div>
                
                <div className="text-center text-lg-start mt-2 pt-2">
                <button type="submit" className="add_btn">Add</button>
                </div>
            </form>
        </div>

      <button className='close' onClick={props.handleClose}>x</button>
      </div>
    </div>
  )
}

export default PopupAddBook
