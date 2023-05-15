import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import { addContact } from '../../redux/ContactSlice';

import { Form, Label, FormBtn } from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const onHandleSubmit = e => {
    e.preventDefault();

    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      })
    );

    resetForm();
  };

  const onInputChange = e => {
    const { name, value } = e.currentTarget;
    name === 'name' ? setName(value) : setNumber(value);
  };

  return (
    <Form onSubmit={onHandleSubmit}>
      <Label>
        Name
        <input
          onChange={onInputChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <input
          onChange={onInputChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <FormBtn type="submit">Add Contact</FormBtn>
    </Form>
  );
};

export default ContactForm;
