import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyle'
import BlogPostList from './components/BlogPostList'
import AddEditPost from './components/AddEditPost'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <div>
        <h1>Blog App</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:id" element={<AddEditPost />} />
        </Routes>
      </div>
    </Router>
  )
}

const Home = () => {
  return (
    <div>
      <AddEditPost />
      <BlogPostList />
    </div>
  )
}

export default App
