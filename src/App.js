import React, { Suspense } from 'react';
import NavBarVivalinda from './components/NavBarVivalinda'
import logPhotos from './instagram'
import AppPhoto from './AppPhoto'
import { Defer } from 'react-progressive-loader'
const Footer = React.lazy( () => import( './components/Footer' ) )

const App = () => {
  return(
    <>
      <NavBarVivalinda/>
      <Defer
        render={ () => <AppPhoto promise={ logPhotos(12) } /> }
        renderPlaceholder={ () => <div>Carregado Fotos ...</div> }
        loadOnScreen
      />
      <Suspense fallback={<div>...</div>} >
        <Footer />
      </Suspense>
    </>
  )
}

export default App;
      