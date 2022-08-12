import React from 'react'
import Books from './Books'

function Bookstore({books, Add}) {
  
  return (
    <div className='bookstore'>
      
      {books.map((prom) => (
         <Books book={prom} key={prom.id} Add={Add} present={true}/>
      ))}
    
    
    </div>
  )
}

export default Bookstore
