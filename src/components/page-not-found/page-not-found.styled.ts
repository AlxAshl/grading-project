import styled from 'styled-components';
import {Link as RouterLink } from '../common/common';
import { PageHeading as Heading } from '../common/common';

export const LinkItem = styled.li`
  &:not(:last-child) {
    margin-right: 49px;
    margin-bottom: 10px;
  }
`;

export const Link = styled(RouterLink)`
  display: block;
  max-width: 100px;
  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 16px;
  letter-spacing: 0.03em;
  font-weight: 600;
  text-transform: uppercase;

  color: ${({ theme }) => theme.color.whiteSmoke};
  &:focus,
  &:hover {
    color: ${({ theme }) => theme.color.tangerine};
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;


  background-repeat: no-repeat;
  background-position: top left;
  background-color: ${({ theme }) => theme.color.nero};
  background-size: cover;
`;

export const PageHeading = styled(Heading)`
  margin-bottom: 46px;
  padding-bottom: 29px;
  padding-left: 6px;

  border-bottom: 0.5px solid rgba(230, 230, 230, 0.25);
`;

export const ContentWrapper = styled.div`
  max-width: 1080px;
  flex-shrink: 0;
  width: 100%;
  margin: 0 auto;
  margin-top: 136px;
  margin-bottom: 40px;
`;
