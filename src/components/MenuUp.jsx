import React from 'react'
import { useState } from 'react';
import PopupAddBook from './PopupAddBook';

function MenuUp() {

  const [isOpenAdd, setIsOpenAdd] = useState(false);

  const togglePopupAdd = () => {
    setIsOpenAdd(!isOpenAdd);
  }



  return (
    <div>
    <div className='menuUp'>
      <div className='menuUpText'>Welcome to e-library</div>     
    </div>
    <div className='options'>

      <div>
      <input
      class="btn btn-danger btn btn-info"
      type="button"
      value="Add book"
      onClick={togglePopupAdd}
    />
        {isOpenAdd && <PopupAddBook
      handleClose={togglePopupAdd}
    />}
        
        </div>
      <div><button type="button" class="btn btn-danger btn btn-info" id="change_button">Change book's properties</button> </div>
      <div><button type="button" class="btn btn-danger btn btn-info" id="remove_button">Remove book</button> </div>
    </div>

    </div>
  )
}

export default MenuUp
