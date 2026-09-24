import { useEffect, useState } from 'react'
import { getUsers } from '../api/client'
import { Container } from 'react-bootstrap'
import { MyCard } from '../components/MyCard'

export function UserList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then(setUsers)
  }, [])

  return (
    <Container className="my-4">
      <h2>Usuários</h2>
      {users.slice(0, 10).map(user => { // Pega os 10 primeiros
        user.title = user.username;
        user.body = user.name;
        return <MyCard cardData={ user } />
      })}
    </Container>
  )
}