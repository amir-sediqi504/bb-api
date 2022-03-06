import React, {useState, useEffect} from 'react'
import logo from '../img/logo.png'
import axios from 'axios'
const Header = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () =>{
      const result = await axios(`https://www.breakingbadapi.com/api/quotes/1`)

      console.log(result.data);
      setItems(result.data) 
      setIsLoading(false)
    }
    fetchItems()
  }, [])
  return (
    <header className='center'>
      <img src={logo} alt='' />
    </header>
  )
}

export default Header