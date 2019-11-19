import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import * as styles from '../../styles/common';
import { GreenButton } from '../common/Buttons';

const BUTTON_MARGIN_TOP = '1.5rem';

const ButtonWrapper = styled.div`
  margin-top: ${BUTTON_MARGIN_TOP};
`;

const Input = styled.input`
  ${styles.InputStyle}
`;

function EnterRoomNumber({ history }) {
  const [roomNumber, setRoomNumber] = useState('');

  function handleInputChange(e) {
    setRoomNumber(e.target.value);
  }

  function moveNicknamePage() {
    history.push({
      pathname: '/nickname',
      state: { roomNumber },
    });
  }

  function moveLoginPage() {
    history.push({
      pathname: '/login',
    });
  }

  function handlePressEnter(e) {
    if (e.key === 'Enter') {
      moveNicknamePage();
    }
  }

  return (
    <>
      <Input placeholder="방 번호" onChange={handleInputChange} onKeyUp={handlePressEnter} />
      <ButtonWrapper>
        <GreenButton onClick={moveNicknamePage}>입장하기</GreenButton>
      </ButtonWrapper>
      <ButtonWrapper>
        <GreenButton onClick={moveLoginPage}>방 만들기</GreenButton>
      </ButtonWrapper>
    </>
  );
}

EnterRoomNumber.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

export default EnterRoomNumber;
