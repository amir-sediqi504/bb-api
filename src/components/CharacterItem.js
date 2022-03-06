import React from 'react'
import { isTemplateMiddle } from 'typescript'

const Characteritemm = ({ itemm }) => {
  return (
    <div className='card'>
    <div className='card-inner'>
      <div className='card-front'>
        <img src={itemm.img} alt='' />
      </div>
      <div className='card-back'>
        <h1>{itemm.name}</h1>
        <ul>
          <li>
            <strong>Actor Name:</strong> {itemm.portrayed}
          </li>
          <li>
            <strong>Nickname:</strong> {itemm.nickname}
          </li>
          <li>
            <strong>Birthday:</strong> {itemm.birthday}
          </li>
          <li>
            <strong>Status:</strong> {itemm.status}
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Characteritemm