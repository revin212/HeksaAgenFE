import { useState } from 'react'
import ScrollToTop from './utils/ScrollToTop'
import Layout from './components/Layout/Layout'
import { AgenList } from './pages/AgenList/AgenList'
import { AgenForm } from './pages/AgenForm/AgenForm'
import { AgenDetail } from './pages/AgenDetail/AgenDetail'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from './pages/NotFound/NotFound'

function App() {

  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AgenList />} />
          <Route path="/create-agen" element={<AgenForm variant={'Create'} />} />
          <Route path="/edit-agen/:agenId" element={<AgenForm variant={'Edit'} />}/>
          <Route path="/agen/:agenId" element={<AgenDetail />}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
