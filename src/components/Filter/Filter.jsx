import PropTypes from 'prop-types';
import { Label } from 'components/Filter/Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter name"
      />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
