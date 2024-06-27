import React, {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom' // useNavigate instead of useHistory
import {addPost, updatePost} from '../utils/mockAPI' // Ensure mockAPI functions are correctly imported
import styled from 'styled-components'

const FormContainer = styled.form`
  background-color: #ffffff;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

const AddEditPost = () => {
  const navigate = useNavigate() // useNavigate instead of useHistory
  const {id} = useParams()

  const [post, setPost] = useState({
    title: '',
    author: '',
    content: '',
    date: '',
  })

  const handleChange = e => {
    const {name, value} = e.target
    setPost(prevPost => ({
      ...prevPost,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (id) {
      updatePost(parseInt(id), post) // Example updatePost function
    } else {
      addPost(post) // Example addPost function
    }

    setPost({
      title: '',
      author: '',
      content: '',
      date: '',
    })

    navigate('/') // Navigate back to home or any appropriate route
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={post.title}
        onChange={handleChange}
        required
      />
      <label htmlFor="author">Author</label>
      <input
        type="text"
        id="author"
        name="author"
        value={post.author}
        onChange={handleChange}
        required
      />
      <label htmlFor="content">Content</label>
      <textarea
        id="content"
        name="content"
        value={post.content}
        onChange={handleChange}
        required
      />
      <label htmlFor="date">Date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={post.date}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </FormContainer>
  )
}

export default AddEditPost
