import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {};

const AddButton: FC<Props> = () => (
  <button className="iconButton">
    <FontAwesomeIcon icon={['fas', 'plus']} />
  </button>
);

export default AddButton;
