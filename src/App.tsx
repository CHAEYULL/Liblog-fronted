import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import PostWrite from './pages/PostWrite/PostWrite'
import PostList from './pages/PostList';
import UsersLogin from './pages/UsersLogin';
import UsersRegister from './pages/UsersRegister';
import UsersProfiles from './pages/UsersProfiles';
function App() {
    return (
      <>
          <main>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/post-write" element={<PostWrite/>}></Route>
              <Route path="/post-list" element={<PostList/>}/>
              <Route path="/users-login" element={<UsersLogin/>}/>
              <Route path="/users-register" element={<UsersRegister/>}/>
              <Route path="/users-profiles" element={<UsersProfiles/>}/>
            </Routes>
           </main>
      </>
    )
}
export default App;