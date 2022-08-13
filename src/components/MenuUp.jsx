import React from 'react'
import { useState } from 'react';
import PopupAddBook from './PopupAddBook';
import PopupChangeBook from './PopupChangeBook';

function MenuUp() {

  const [isOpenAdd, setIsOpenAdd] = useState(false);

  const togglePopupAdd = () => {
    setIsOpenAdd(!isOpenAdd);
  }

  const [isOpenChange, setIsOpenChange] = useState(false);

  const togglePopupChange = () => {
    setIsOpenChange(!isOpenChange);
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

      <div>
      <input
      class="btn btn-danger btn btn-info"
      type="button"
      value="Change book's characteristics"
      onClick={togglePopupChange}
    />
        {isOpenChange && <PopupChangeBook
      handleCloseChange={togglePopupChange}
    />}
      </div>

      <div><button type="button" class="btn btn-danger btn btn-info" id="remove_button">Remove book</button> </div>
    </div>

    </div>
  )
}

export default MenuUp
