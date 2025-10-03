import { FieldForm } from "../FieldForm";
import { FormTitle } from "../FormTitle";
import { InputField } from "../InputField";
import { Label } from "../Label";
import { ButtomForm } from "../ButtomForm";
import { DropdownList } from "../DropdownList";

import './event-create-form.style.css';

// No react components são funções
export function EventCreateForm () {
  return (
    <form className='event-create-form'>
      <div className="fields">
        <FormTitle>
          Preencha para criar um evento:
        </FormTitle> 
        <FieldForm>
          <Label htmlFor="name">Qual o nome do evento?</Label>
          <InputField type="text" id='name' placeholder='Summer dev hits' />
        </FieldForm>

        <FieldForm>
          <Label htmlFor="eventDate">Data do Evento</Label>
          <InputField type="date" id='eventDate' />
        </FieldForm>

          <FieldForm>
          <Label htmlFor="eventDate">Data do Evento</Label>
          <DropdownList />
        </FieldForm>
      </div>
      <div className="actions">
        <ButtomForm>
          Criar Evento
        </ButtomForm>
      </div>
    </form>
  )
}