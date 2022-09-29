import { getErrorMessage, getQuests, getQuestsLoadedStatus, getQuestType } from '../../../../store/quest-process/selectors';
import MessagePopup from '../../../common/popup/popup';
import { useAppSelector } from '../../../hooks/utilityHooks';
import { setTypeEn } from '../../utility';
import {QuestsList} from '../quests-list/quests-list'
import { TabsList } from '../tabs-list/tabs-list';


const QuestsCatalog = () => {

  const quests = useAppSelector(getQuests);
  const type = useAppSelector(getQuestType)
  const isQuestsLoaded = useAppSelector(getQuestsLoadedStatus)
  const filteredQuests = quests.filter((quest) => quest.type === setTypeEn(type));
  const errorMessage = useAppSelector(getErrorMessage);
  return (
  <>
    <TabsList />
    {errorMessage
      ? <MessagePopup />
      : ''}
    {isQuestsLoaded
    ? <QuestsList quests={type === 'Все квесты'
    ? quests
    : filteredQuests} />
    : !errorMessage && 'Loading quests'}
  </>
)};

export default QuestsCatalog;
