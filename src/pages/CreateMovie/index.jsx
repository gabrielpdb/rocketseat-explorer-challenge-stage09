import { Container, Form } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { FiArrowLeft } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <div className="content">
        <div className="header">
          <ButtonText icon={FiArrowLeft} title="Voltar" />
          <h2>Novo filme</h2>
        </div>

        <Form>
          <div>
            <Input placeholder="Título" type="text" />
            <Input placeholder="Sua nota (de  0 a 5)" type="number" />
          </div>

          <Textarea placeholder="Observações" />

          <Section title={'Marcadores'}></Section>

          <div className="buttons">
            <Button title={'Excluir filme'} disabled />
            <Button title={'Salvar alterações'} />
          </div>
        </Form>
      </div>
    </Container>
  )
}
