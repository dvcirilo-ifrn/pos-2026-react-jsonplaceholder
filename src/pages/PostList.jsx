import { useEffect, useState } from 'react'
import { getPosts } from '../api/client'
import { Container } from 'react-bootstrap'
import { MyCard } from '../components/MyCard'

export function PostList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts().then(setPosts)
  }, [])

  return (
    <Container className="my-4">
      <h2>Posts</h2>
      {posts.slice(0, 10).map(post => ( // Pega os 10 primeiros
        <MyCard cardData={ post } />
      ))}
    </Container>
  )
}