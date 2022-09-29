import { ReactNode } from 'react';
import { Header, Footer } from '../common';

interface Props {
  children?: ReactNode
}// добавил интерфейс для ТС-а переименовать пропсы в относящиеся к структуре

const MainLayout = ({ children }: Props) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
