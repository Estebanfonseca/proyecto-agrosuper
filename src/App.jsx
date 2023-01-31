import './App.css'
import LayoutLogin from './pages/layouts/layoutLogin/LayoutLogin'
import Layout from './pages/layouts/layout/Layout'
import {Routes, Route} from 'react-router-dom'
import General from './components/General'
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<LayoutLogin/>}/>
          <Route path="/general" element={<General/>}/>
        </Routes>
      </Layout>
    </div>
  )
}

export default App
