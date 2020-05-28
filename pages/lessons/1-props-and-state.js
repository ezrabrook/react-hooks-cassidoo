// import Counter from '@components/Counter'

import React from 'react'
import Counter from '@components/Counter'

let text = 'ello'
 const Button = ({children}) => {
  return <button>{children}</button>
 }

// const reactEl = React.createElement('div', null, 'hellloooo')

export default function PropsState() {
  return (
    <>
    <Counter/>
    <Counter/>
    <Counter/>
    </>
  ) 
}
