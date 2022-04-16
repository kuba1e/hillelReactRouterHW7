import React from 'react'

export const List = ({items, ItemComponent, ...props}) => {
  return (
        <ul className='items-list'>
          {items.map(item=>{
            return <li key={item.id}><ItemComponent item={item}>
              </ItemComponent></li>
          })}
        </ul>
  )
}
