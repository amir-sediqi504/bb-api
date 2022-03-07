import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from './Spinner'

const CharacterGrid = ({item, loading}) => {
  

  return loading ? <Spinner /> : <section className='cards'> 
        {item.map(itemm => (
            <CharacterItem key={itemm.char_id} itemm={itemm}></CharacterItem>
        ))}
    </section>
}

export default CharacterGrid