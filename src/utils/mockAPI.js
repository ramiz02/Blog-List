// utils/mockAPI.js

const mockPosts = [
  {
    id: 1,
    title: 'First Post',
    author: 'John Doe',
    content: 'Content of the first post.',
    date: '2024-06-27',
  },
  {
    id: 2,
    title: 'Second Post',
    author: 'Jane Smith',
    content: 'Content of the second post.',
    date: '2024-06-28',
  },
  // Add more posts as needed
]

const getPosts = () => {
  return mockPosts
}

const addPost = newPost => {
  mockPosts.push(newPost)
}

const updatePost = (id, updatedPost) => {
  const index = mockPosts.findIndex(post => post.id === id)
  if (index !== -1) {
    mockPosts[index] = {...mockPosts[index], ...updatedPost}
  }
}

const deletePost = id => {
  const index = mockPosts.findIndex(post => post.id === id)
  if (index !== -1) {
    mockPosts.splice(index, 1)
  }
}

export {mockPosts, getPosts, addPost, updatePost, deletePost}
