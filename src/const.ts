export enum AppRoute {
  Root = "/",
  Quest = "/detailed-quest/:id",
  Notfound = "*",
  Contacts = "/contacts"
};

export enum NameSpace {
  Quest = 'QUEST',
  Order = 'ORDER',
};

export enum HeaderPath  {
  Квесты= "/",
  Новичкам= "#",
  Отзывы= "#",
  Акции= "#",
  Контакты= "/contacts",
};

export enum APIRoute {
  Quests = '/quests',
  Quest = '/quest',
  Order = '/orders',
};

export const ICON_URL = 'img/pin.svg'
export const PLACE_LOCATION = {
  lat: 59.968137,
  lng: 30.316272,
  zoom: 13
};

export const BACKEND_URL = 'http://localhost:3001';
export const REQUEST_TIMEOUT = 4000;


export const QUEST_LIST = ['Все квесты', 'Приключения', 'Ужасы', 'Мистика', 'Детектив', 'Sci-fi'];
