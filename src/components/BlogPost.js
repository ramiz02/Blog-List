// components/BlogPost.js

import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getPostById} from '../utils/mockAPI' // Ensure getPostById is correctly imported

const BlogPost = () => {
  const {id} = useParams()
  const [post, setPost] = useState(null)

  useEffect(() => {
    const fetchPost = () => {
      const postFromStorage = getPostById(parseInt(id))
      setPost(postFromStorage)
    }

    fetchPost()
  }, [id]) // Include id in the dependency array

  if (!post) {
    return <div>No post found.</div>
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>Author: {post.author}</p>
      <p>{post.content}</p>
      <p>Date: {post.date}</p>
    </div>
  )
}

export default BlogPost
