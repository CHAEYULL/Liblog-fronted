import './App.scss'
import Header from './component/Header'
import { Routes, Route } from 'react-router-dom'
import PostWrite from './pages/PostWrite'
import PostList from './pages/PostList';
import UsersLogin from './pages/UsersLogin';
import UsersRegister from './pages/UsersRegister';
import UsersProfiles from './pages/UsersProfiles';
function App() {
    return (
      <body >
        <Header></Header>
          <main>
            <Routes>
              <Route path="/post-write" element={<PostWrite/>}></Route>
              <Route path="/post-list" element={<PostList/>}/>
              <Route path="/users-login" element={<UsersLogin/>}/>
              <Route path="/users-register" element={<UsersRegister/>}/>
              <Route path="/users-profiles" element={<UsersProfiles/>}/>
            </Routes>
           </main>
      </body>
    )
}
export default App;