import React from 'react'
import {BsChevronDoubleRight} from 'react-icons/bs'
import {BrowserRouter,Routes, Route, Link} from 'react-router-dom';
import MenuDownFixed from './MenuDownFixed';

function MenuDown({token}) {
  return (
    <div className='menuDown'>
      <div className='menuDownText'>See my favourite books
      <Link to='/fav' className='button_next'>
        <BsChevronDoubleRight></BsChevronDoubleRight>
        </Link>
        </div>
        <div className='down_menu'>
        <MenuDownFixed token={token}/>
        </div>
    </div>
  )
}

export default MenuDown
