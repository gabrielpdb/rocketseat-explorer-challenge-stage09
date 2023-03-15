import { Container, Form, Avatar } from './styles'

import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'

export function Profile() {
  return (
    <Container>
      <header>
        <ButtonText title={'Voltar'} icon={FiArrowLeft} to="/" />
      </header>

      <Form>
        <Avatar>
          <img src="http://github.com/gabrielpdb.png" alt="Imagem de Gabriel" />

          <label htmlFor="avatar">
            <FiCamera />

            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="email" icon={FiMail} />
        <Input placeholder="Senha atual" type="password" icon={FiLock} />
        <Input placeholder="Nova Senha" type="password" icon={FiLock} />

        <Button title={'Salvar'} />
      </Form>
    </Container>
  )
}
