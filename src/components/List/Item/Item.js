import React, { Children } from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'


export const Item = ({item, filter,children, to, label,...props}) => {
  const [searchParams, setSearchParams] = useSearchParams()
  console.log(searchParams)
  return (
    <div className='user-item'>
      {Children.map(children, child=>{
        return React.cloneElement(child, {item})
      })}
      <button>{label}</button>
      <Outlet/>
    </div>
  )
}
