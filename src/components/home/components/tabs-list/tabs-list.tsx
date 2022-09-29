import * as S from '../quests-catalog/quests-catalog.styled';
import {setIcon} from '../../utility';
import { QUEST_LIST } from '../../../../const';
import { store } from '../../../../store';
import { questType } from '../../../../store/quest-process/quest-process';
import { useAppSelector } from '../../../hooks/utilityHooks';
import { getQuestType } from '../../../../store/quest-process/selectors';


export const TabsList = () => {
  const type = useAppSelector(getQuestType)
  return (
    <S.Tabs>
      {QUEST_LIST.map((questListType) => {
        return (
          <S.TabItem key = {questListType} >
            <S.TabBtn isActive={questListType === type} onClick={(e) => {store.dispatch(questType(questListType))}}>
              {setIcon(questListType)}
              <S.TabTitle>{questListType}</S.TabTitle>
            </S.TabBtn>
          </S.TabItem>
        )
      })}
    </S.Tabs>
  )
}

