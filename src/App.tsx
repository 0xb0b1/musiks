import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/home'
import { Categories } from './pages/categories'
import { Playlists } from './pages/playlists'
import { DefaultLayout } from './layouts/default-layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/playlists' element={<Playlists />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
