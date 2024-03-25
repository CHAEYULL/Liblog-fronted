import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import PostWrite from './pages/PostWrite/PostWrite'
import PostList from './pages/PostList/PostList';
import PostEdit from './pages/PostEdit/PostEdit';
import PostDetail from './pages/PostDetail/PostDetail';
import Register from './pages/Register/Register'
function App() {
    return (
      <>
          <main>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/post-write" element={<PostWrite/>}/>
              <Route path="/post-list" element={<PostList/>}/>
              <Route path="/post-detail/:id" element={<PostDetail/>}/>
              <Route path="/post-edit/:id" element={<PostEdit/>}/>
              <Route path="/users">
                <Route path="register" element={<Register/>}/>
              </Route>
            </Routes>
           </main>
      </>
    )
}
export default App;