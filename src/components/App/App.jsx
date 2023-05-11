import { ContactForm, ContactList, React, Filter } from 'components/App/index';

import { Container, Title, SubTitle } from 'components/App/App.styled';

const App = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
