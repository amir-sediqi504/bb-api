import logo from "./logo.svg";
import "./App.css";
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from "./components/Header";
import CharacterGrid from "./components/CharacterGrid";
import SearchBar from "./components/SearchBar";

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () =>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      console.log(result.data);
      setItems(result.data) 
      setIsLoading(false)
    }
    fetchItems()
  }, [query])

  return (
    <div className="container">
     <Header />
     <SearchBar getQuery={(q)=> setQuery(q)}/>
     <CharacterGrid loading={isLoading} item={items}/>
    </div>
  );
}

export default App;
