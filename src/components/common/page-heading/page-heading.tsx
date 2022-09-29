import { ReactNode } from 'react';
import * as S from './page-heading.styled';

interface Props {
  children?: ReactNode
}// добавил интерфейс для ТС-а

const PageHeading = ({ children, ...props }: Props) => (
  <S.PageHeading {...props}>{children}</S.PageHeading>
);

export default PageHeading;
