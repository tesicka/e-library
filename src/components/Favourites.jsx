import React from 'react'
import Books from './Books'

function Favourites({books}) {
  return (
    <div>
      <h3 className='favbooks'>Your favoutite books</h3>
      {books.map((prom) => (
         <Books book={prom} key={prom.id} present={false}/>
      ))}
    </div>
  )
}

export default Favourites


