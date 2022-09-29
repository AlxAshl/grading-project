import { useLocation } from 'react-router-dom';
import logo from '../../../assets/img/logo.svg';
import { HeaderPath } from '../../../const';
import * as S from './header.styled';


const headerObject = Object.entries(HeaderPath);
const Header = (): JSX.Element => {
  const {pathname} = useLocation();
  return(
  <S.StyledHeader>
    <S.HeaderWrapper>
      <S.Logo>
        <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
      </S.Logo>
      <S.Navigation>
        <S.Links>
        {headerObject.map((object) => {
          const keyValue = `${object[0]}`;
          return (
            <S.LinkItem key = {keyValue}>
              <S.Link $isActiveLink = {pathname === object[1]}
                 to={object[1]}>
                {object[0]}
              </S.Link>
            </S.LinkItem>
          );
        })}
        </S.Links>
      </S.Navigation>
      <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
)};

export default Header;

