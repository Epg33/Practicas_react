import React from 'react'

export interface LoadingComponent {}

const Loading:React.FC<LoadingComponent> = ():JSX.Element => {
  return (
    <svg className="w-2/4 origin-center animate-spin" viewBox="25 25 50 50">
      <circle className="fill-none stroke-sky-500 stroke-2 loading" r={20} cy={50} cx={50}></circle>
    </svg>
  )
}

export default Loading
