import React, {useState, useEffect} from 'react'
import logo from '../img/logo.png'

const Header = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  return (
    <header className='center'>
      <img src={logo} alt='' />
    </header>
  )
}

export default Header