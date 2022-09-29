import {ReactNode} from 'react';
import * as S from './button.styled';

interface Props extends React.HTMLAttributes<HTMLButtonElement>{
  children?: ReactNode
}

const Button = ({ children, ...props } : Props) => (
  <S.Button {...props}>{children}</S.Button>
);

export default Button;
