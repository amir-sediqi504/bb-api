import logo from "./logo.svg";
import "./App.css";
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from "./components/Header";
import CharacterGrid from "./components/CharacterGrid";


function App() {
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
    <div className="container">
     <Header />
     <CharacterGrid loading={isLoading} item={items}/>
    </div>
  );
}

export default App;
