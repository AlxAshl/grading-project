import { ReactComponent as IconPerson } from '../../../../assets/img/icon-person.svg';
import { QuestData } from "../../../../types"
import * as S from '../quests-catalog/quests-catalog.styled'
import {setIcon, setLevelRu, setTypeRu} from '../../utility'


type QuestProps = {
  quest: QuestData
}
export const QuestCard = ({quest}: QuestProps) => {
  const {id, title, previewImg, type, level, peopleCount} = quest;
  const iconType = setTypeRu(type)

  return (
    <S.QuestItem>
      <S.QuestItemLink to={`detailed-quest/${id}`}>
        <S.Quest>
          <S.QuestImage
            src={previewImg}
            width="344"
            height="232"
          />
          <S.QuestContent>
            <S.QuestTitle>{title}</S.QuestTitle>
            <S.QuestFeatures>
              <S.QuestFeatureItem>
                <IconPerson />
                {`${peopleCount[0]}-${peopleCount[1]} чел`}
              </S.QuestFeatureItem>
              <S.QuestFeatureItem>
               {iconType && setIcon(iconType)}
               {setLevelRu(level)}
              </S.QuestFeatureItem>
            </S.QuestFeatures>
          </S.QuestContent>
        </S.Quest>
      </S.QuestItemLink>
    </S.QuestItem>
  );
}

