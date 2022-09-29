import logo from '../../../assets/img/logo.svg';
import * as S from './header.styled';

//<S.Link $isActiveLink to="/"> ---- стейт отвечающий за выбранный нав-элемент, сейчас добавлен по дефолту на все, переписать
const Header = (): JSX.Element => (
  <S.StyledHeader>
    <S.HeaderWrapper>
      <S.Logo>
        <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
      </S.Logo>

      <S.Navigation>
        <S.Links>
          <S.LinkItem>
            <S.Link $isActiveLink to="/">
              Квесты
            </S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link $isActiveLink to="#">Новичкам</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link $isActiveLink to="#">Отзывы</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link $isActiveLink to="#">Акции</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link $isActiveLink to="/contacts">Контакты</S.Link>
          </S.LinkItem>
        </S.Links>
      </S.Navigation>
      <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
);

export default Header;
