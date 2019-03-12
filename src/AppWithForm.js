import React, { Suspense } from 'react';
import NavBarVivalinda from './components/NavBarVivalinda' 
const Parcerias = React.lazy( () => import( './pages/Parcerias' ))
const Footer = React.lazy( () => import( './components/Footer' ))

const AppWithForm = () => {

  return(
    <>
      <NavBarVivalinda/>
      <Suspense fallback={<div>...</div>} >
         <Parcerias />
      </Suspense>
      <Suspense fallback={<div>...</div>} >
        <Footer />
      </Suspense>
    </>
  )
}

export default AppWithForm;
