const appTheme = {
  font: {
    mini: '12px',
    small: '13px',
    semibase: '14px',
    base: '15px',
    upperbase: '17px',
    medium: '24px',
    formsHeading: '32px',
    semilarge: '64px',
    large: '92px',
  },
  color: {
    white: '#FFFFFF',
    black: '#000000',
    whiteSmoke: '#F0F0F0',
    whisper: '#E5E5E5',
    whisper2: '#E6E6E6',
    gray: 'rgba(255, 255, 255, 0.32)',
    darkerGray: 'rgba(255, 255, 255, 0.5)',
    nero: '#1A1A1A',
    nero2: '#1F1D1D',
    tangerine: '#F2890F',
    carrotOrange: '#F39425',
    eclipse: 'rgba(61, 51, 51, 0.96)',
    pinkSwan: '#B8B8B8',
  },
};

const styleFont = {// правильней будет написать через URL_FONT_BLAH
  RalewayBlackWoff2: 'src/assets/fonts/raleway-black.woff2',
  RalewayRegularWoff2: 'src/assets/fonts/raleway-regular.woff2',
  RalewayMediumWoff2: 'src/assets/fonts/raleway-medium.woff2',
  RalewaySemiBoldWoff2: 'src/assets/fonts/raleway-semibold.woff2',
  RalewayBoldWoff2: 'src/assets/fonts/raleway-bold.woff2',
  RalewayExtraBoldWoff2: 'src/assets/fonts/raleway-black.woff2'
}
const ICON_PATH = {
  IconAllQuests: 'src/assets/img/icon-all-quests.svg',
  IconAdventures: 'src/assets/img/icon-adventures.svg',
  IconHorrors: 'src/assets/img/icon-horrors.svg',
  IconMystic: 'src/assets/img/icon-mystic.svg',
  IconDetective: 'src/assets/img/icon-detective.svg',
  IconScifi: 'src/assets/img/icon-scifi.svg',
  IconPerson: 'src/assets/img/icon-person.svg',
  IconPuzzle: 'src/assets/img/icon-puzzle.svg'
}
// возможно весь этот конст вообще вытащить отсюда и перекинуть в отдельный фаил
export type AppThemeType = typeof appTheme

export { appTheme, styleFont, ICON_PATH };
