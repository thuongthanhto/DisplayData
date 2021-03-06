import styled from 'styled-components';
import { Modal } from 'antd';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  border-bottom: 1px solid gray;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const TabContainer = styled.div`
  padding: 20px;
`;

export const TimeStamp = styled.div`
  padding-left: 10px;
`;

export const CustomModal = styled(Modal)`
  @media only screen and (max-width: 480px) {
    .ant-modal-body {
      max-height: 420px;
      overflow-y: auto;
    }
  }
`;
