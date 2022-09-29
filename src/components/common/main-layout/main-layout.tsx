import { ReactNode } from 'react';
import { Header, Footer } from '../common';

interface Props {
  children?: ReactNode
}

const MainLayout = ({ children }: Props) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
