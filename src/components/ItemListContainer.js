import React from 'react'
import ItemCount from './ItemCount'
 

const ItemListContainer = ({pepe}) => {
    const onAdd=(value) => {
        console.log(value)

    }
  return (
      <div>
    <div>ItemListContainer</div>
    <div>{pepe}</div>
    <ItemCount onAdd={onAdd} stock={5} initial={1}/>
    </div>
  )
}

export default ItemListContainer