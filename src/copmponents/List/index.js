import React from 'react'
import { Card } from '../Card'
import './index.css'

export const List = ({list,basket, setBasket}) => {
  return (
    <div className='list'>
        {list?.map((item, url) => (
            <Card key={url} itemBook = {item} isInBasket={basket.includes(item.name)} setBasket={setBasket}  />
        ))}
    </div>
  )
}
