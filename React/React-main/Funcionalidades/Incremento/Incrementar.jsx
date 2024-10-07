import React from 'react'

// eslint-disable-next-line react/display-name, react/prop-types
export const Incrementar = React.memo(({ incrementar }) => {

    console.log('Me estoy redibujando')

  return (
    <button onClick={() => incrementar(1)}>+1</button>
  )
}
)
