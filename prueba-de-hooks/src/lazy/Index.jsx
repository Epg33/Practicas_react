import {Suspense, lazy, useState} from 'react'
import skull from '../assets/skull.jpg';
import {LazyLoadImage} from 'react-lazy-load-image-component'

const Something = lazy(()=>import('./Something.jsx'))

function Index() {
  return (
    <>
      <Suspense fallback={<h1>waiting...</h1>}>
        <Something />
        <LazyLoadImage src={skull} añt=''/>
      </Suspense>
    </>
  )
}

export default Index