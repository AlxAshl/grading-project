import { ReactComponent as IconAllQuests } from '../../assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from '../../assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from '../../assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from '../../assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from '../../assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from '../../assets/img/icon-scifi.svg';
import { ReactComponent as IconPerson } from '../../assets/img/icon-person.svg';
import { ReactComponent as IconPuzzle } from '../../assets/img/icon-puzzle.svg';

export const setIcon = (type: string) => {
  switch(type){
    case 'Ужасы':
      return <IconHorrors/>
    case 'Приключения':
      return <IconAdventures/>
    case 'Детектив':
      return <IconDetective/>
    case 'Sci-fi':
      return <IconScifi/>
    case 'Мистика':
      return <IconMystic/>
    case 'Все квесты':
      return <IconAllQuests/>
    case 'Головоломка':
      return <IconPuzzle />
    case ('person'):
      return <IconPerson/>
  }
}

export const setTypeEn = (type: string) => {
  switch(type){
    case 'Все квесты':
      return ''
    case 'Ужасы':
      return 'horror'
    case 'Sci-fi':
      return 'sci-fi'
    case 'Приключения':
      return 'adventures'
    case 'Мистика':
      return 'mystic'
    case 'Детектив':
      return 'detective'
  }
}

export const setTypeRu = (type: string) => {
  switch(type){
    case 'horror':
      return 'Ужасы'
    case 'sci-fi':
      return 'Sci-fi'
    case 'adventures':
      return 'Приключения'
    case 'mystic':
      return 'Мистика'
    case 'detective':
      return 'Детектив'
  }
}

export const setLevelRu = (type: string) => {
  switch(type) {
    case 'hard':
      return 'Сложный'
    case 'medium':
      return 'Средний'
    case 'easy':
      return 'Легкий'
  }
}
