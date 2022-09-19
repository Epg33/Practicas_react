import React from 'react'
import { Link } from 'react-router-dom'

function C() {
  return (
    <div>C
      <Link to='/pagina2' className='redir'>ir a la pagina 2</Link>
    </div>
  )
}

export default C;