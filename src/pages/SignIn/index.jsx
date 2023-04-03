import { Background, Container, Form } from './styles'
import { FiLock, FiMail } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { useAuth } from '../../hooks/auth'
import { useState } from 'react'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Faça seu login</h2>

        <Input
          icon={FiMail}
          placeholder="E-mail"
          type="email"
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          icon={FiLock}
          placeholder="Senha"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button title={'Entrar'} onClick={handleSignIn} />
        <ButtonText title={'Criar conta'} to="/signup" />
      </Form>

      <Background />
    </Container>
  )
}
