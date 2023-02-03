import './App.css'
import LayoutLogin from './pages/layouts/layoutLogin/LayoutLogin'
import Layout from './pages/layouts/layout/Layout'
import {Routes, Route} from 'react-router-dom'
import General from './pages/General'
import Editor from './pages/Editor'
import Pavo from './pages/Pavo'
import Pollo from './pages/Pollo'
import Cerdo from './pages/Cerdo'
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<LayoutLogin/>}/>
          <Route path="/general" element={<General/>}/>
          <Route path="/editor" element={<Editor/>}/>
          <Route path='/pavo' element={<Pavo/>}/>
          <Route path='/pollo' element={<Pollo/>}/>
          <Route path='/cerdo' element={<Cerdo/>}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default App
