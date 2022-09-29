import { ThemeProvider } from 'styled-components';
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from '../common/common';
import DetailedQuest from '../detailed-quest/detailed-quest';
import Contacts from '../contacts/contacts';
import Home from '../home/home';
import { appTheme } from './common';
import * as S from './app.styled';
import {AppRoute} from '../../const'
import { PageNotFound } from '../page-not-found/page-not-found';


const App = (): JSX.Element => (
  <ThemeProvider theme={appTheme}>
    <S.GlobalStyle />
    <Router>
      <Switch>
        <Route exact path={AppRoute.Quest}>
          <DetailedQuest />
        </Route>
        <Route exact path={AppRoute.Contacts}>
          <Contacts />
        </Route>
        <Route exact path={AppRoute.Root}>
          <Home />
        </Route>
        <Route path={AppRoute.Notfound}>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;

