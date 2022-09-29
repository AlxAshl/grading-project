import {ReactNode} from 'react';
import * as S from './button.styled';

interface Props {
  children?: ReactNode
}// добавил интерфейс для ТС-а

const Button = ({ children, ...props } : Props) => (
  <S.Button {...props}>{children}</S.Button>
);

export default Button;
