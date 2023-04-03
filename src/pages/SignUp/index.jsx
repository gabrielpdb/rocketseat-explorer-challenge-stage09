import { Background, Container, Form } from './styles'
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos!')
    }

    try {
      await api.post('/users', { name, email, password })
      alert('Usuário cadastrado com sucesso!')
      navigate('/signin')
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível cadastrar')
      }
    }
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta</h2>

        <Input
          icon={FiUser}
          placeholder="Nome"
          onChange={e => setName(e.target.value)}
          type="text"
        />
        <Input
          icon={FiMail}
          placeholder="E-mail"
          onChange={e => setEmail(e.target.value)}
          type="email"
        />
        <Input
          icon={FiLock}
          placeholder="Senha"
          onChange={e => setPassword(e.target.value)}
          type="password"
        />

        <Button title={'Cadastrar'} onClick={handleSignUp} />
        <ButtonText
          title={'Voltar para o login'}
          to="/signin"
          icon={FiArrowLeft}
        />
      </Form>

      <Background />
    </Container>
  )
}
