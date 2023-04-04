import { Container, Form, Avatar } from './styles'

import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'

import { Input } from '../../components/Input'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/auth'
import { useState } from 'react'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  async function handleUpdate() {
    const user = {
      name,
      email,
      oldPassword,
      newPassword
    }

    await updateProfile({ user })
  }

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

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange={e => setOldPassword(e.target.value)}
        />
        <Input
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
          onChange={e => setNewPassword(e.target.value)}
        />

        <Button title={'Salvar'} onClick={handleUpdate} />
      </Form>
    </Container>
  )
}
