import { ReactNode } from 'react';
import * as S from './popup.styled';

interface Props {
  children?: ReactNode
}

const MessagePopup = ({ children }: Props) => {
  return (
  <S.Popup >{children}</S.Popup>
)};

export default MessagePopup;
