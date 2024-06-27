// components/BlogPostList.js

import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {getPosts, deletePost} from '../utils/mockAPI'
import styled from 'styled-components'

const BlogContainer = styled.div`
  background-color: #ffffff;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const ListItem = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

const ButtonDelete = styled.button`
  background-color: #d32f2f;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`

const BlogPostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const postsFromStorage = await getPosts()
      setPosts(postsFromStorage)
    }

    fetchData()
  }, [])

  const handleDelete = id => {
    deletePost(id)
    setPosts(prevPosts => prevPosts.filter(post => post.id !== id))
  }

  return (
    <BlogContainer>
      {posts.map(post => (
        <ListItem key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.author}</p>
          <p>{post.content}</p>
          <p>{post.date}</p>
          <Link to={`/edit/${post.id}`}>Edit</Link>
          <ButtonDelete onClick={() => handleDelete(post.id)}>
            Delete
          </ButtonDelete>
        </ListItem>
      ))}
    </BlogContainer>
  )
}

export default BlogPostList
