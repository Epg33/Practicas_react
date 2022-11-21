import {Suspense, lazy, useState} from 'react'
import skuli from './skull.jpg'

const Something = lazy(()=>import('./Something.jsx'))
const bone = lazy(()=>import('./bone.jfif'))
const skull = lazy(()=>import('./skull.jpg'))

function Index() {
  return (
    <>
      <Suspense fallback={<h1>waiting...</h1>}>
        <Something />
        <img src={bone} alt='a bone for lazy loading'/>
        {bone}
        <img src={skuli} alt='idk something bro' />
        {skuli}
      </Suspense>
    </>
  )
}

export default Index