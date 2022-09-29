import {
  MainLayout,
  PageTitle,
  PageHeading,
  PageSubtext,
} from '../common/common';
import * as S from './page-not-found.styled'
import { AppRoute } from '../../const';


export const PageNotFound = () => {
  return (
    <MainLayout>
      <S.Main>
        <S.ContentWrapper>
          <S.PageHeading>
            <PageHeading>
            <PageTitle>Извините, страницы с стаким адресом не существует!</PageTitle>
              <S.LinkItem>
                <S.Link  to={AppRoute.Root}>
                  <PageSubtext>Перейти на главную страницу</PageSubtext>
                </S.Link>
              </S.LinkItem>
            </PageHeading>
          </S.PageHeading>
        </S.ContentWrapper>
      </S.Main>
    </MainLayout>
  );
}

