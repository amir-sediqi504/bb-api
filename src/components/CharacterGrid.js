import React from 'react'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({item, loading}) => {
  

  return loading ? <h1></h1> : <section className='cards'> 
        {item.map(itemm => (
            <CharacterItem key={itemm.char_id} itemm={itemm}></CharacterItem>
        ))}
    </section>
}

export default CharacterGrid