import { ReactNode } from 'react';
import * as S from './page-subtext.styled';

interface Props {
  children?: ReactNode
}// добавил интерфейс для ТС-а

const PageSubtext = ({ children, ...props }: Props) => (
  <S.PageSubtext {...props}>{children}</S.PageSubtext>
);

export default PageSubtext;
