import React, { FC } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  handleClick: any;
};

const AddButton: FC<Props> = ({ handleClick }) => (
  <button onClick={handleClick}>
    <FontAwesomeIcon icon={['fas', 'plus']} />
  </button>
);

export default AddButton;
