
import { QuestData } from '../../../../types'
import { QuestCard } from '../quest-card/quest-card'
import * as S from '../quests-catalog/quests-catalog.styled'


type QuestProps = {
  quests: QuestData[]
}
export const QuestsList = ({quests}: QuestProps) => {

  return (
    <S.QuestsList>
      {quests.map((quest) => (
        <QuestCard
          key={quest.id}
          quest={quest}
        />
      )
      )}
    </S.QuestsList>
  )
}
