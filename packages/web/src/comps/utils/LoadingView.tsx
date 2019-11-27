import React, { FC } from 'react';
import ReactLoading from 'react-loading';
import ReactModal from 'react-modal';

type Props = {
  isLoading: boolean;
};

const LoadingView: FC<Props> = ({ isLoading }) => {
  const customModalStyles = {
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'static',
      background: 'none',
      border: 'none',
      boxShadow: 'none',
    },
  };
  return (
    <ReactModal
      isOpen={isLoading}
      style={customModalStyles}
      ariaHideApp={false}
    >
      <ReactLoading
        type={'bars'}
        color={'#005c17'}
        height={'10rem'}
        width={'10rem'}
      />
    </ReactModal>
  );
};

export default LoadingView;
