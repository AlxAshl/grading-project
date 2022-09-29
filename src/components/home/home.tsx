import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from '../common/common';
import { QuestsCatalog } from './components/components';
import * as S from './home.styled';
import { store } from '../../store'
import { fetchQuestsAction } from '../../store/api-actions';


store.dispatch(fetchQuestsAction())

const HomePage = () => {

  return (
  <MainLayout>
    <S.Main forwardedAs="main">
      <PageHeading>
        <PageTitle>Выберите тематику</PageTitle>
        <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
      </PageHeading>
      <QuestsCatalog />
    </S.Main>
  </MainLayout>
)};

export default HomePage;
