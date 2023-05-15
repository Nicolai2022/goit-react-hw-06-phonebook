import { useDispatch } from 'react-redux';
import { removeContact } from '../../redux/ContactSlice';
import PropTypes from 'prop-types';

import {
  ContactItemContainer,
  ContactText,
  DeleteItemBtn,
} from 'components/ContactItem/ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ContactItemContainer>
      <ContactText>
        {name}: {number}
      </ContactText>
      <DeleteItemBtn type="button" onClick={() => dispatch(removeContact(id))}>
        Delete
      </DeleteItemBtn>
    </ContactItemContainer>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
