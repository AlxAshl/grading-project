import { ReactNode } from 'react';
import * as S from './container.styled';

interface Props {
  children?: ReactNode
}// добавил интерфейс для ТС-а

const Container = ({ children, ...props }: Props) => (
  <S.Container {...props}>{children}</S.Container>
);

export default Container;
