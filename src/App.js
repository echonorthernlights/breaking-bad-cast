import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'
import Search from './components/ui/Search'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'



const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const baseURL = 'https://www.breakingbadapi.com/api/';

  useEffect( () => {
    const fetchItems = async () => {
      try {
        const {data} = await axios(`${baseURL}characters?name=${query}`)
        setItems(data);
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchItems();
    // return () => {
    //   cleanup
    // }
  },[query])
  
  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => {setQuery(q)}}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  )
}

export default App
