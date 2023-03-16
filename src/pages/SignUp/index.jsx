import { Background, Container, Form } from './styles'
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>

        <h2>Crie sua conta</h2>

        <Input icon={FiUser} placeholder="Nome" />
        <Input icon={FiMail} placeholder="E-mail" />
        <Input icon={FiLock} placeholder="Senha" />

        <Button title={'Cadastrar'} />
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
