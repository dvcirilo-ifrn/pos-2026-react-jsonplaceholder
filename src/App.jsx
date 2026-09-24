import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PostList } from './pages/PostList'
import { UserList } from './pages/UserList'
import { Home } from './pages/Home'
import { Layout } from './components/Layout'

function App() {
  return (
    <div className="container w-50">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/users" element={<UserList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
