import React from 'react'

const CharacterGrid = ({item, loading}) => {
  

  return loading ? <h1></h1> : <section className='cards'> 
        {item.map(itemm => (
            <h1 key={itemm.quote_id} >{itemm.quote}</h1>
        ))}
    </section>
}

export default CharacterGrid