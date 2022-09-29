import { NameSpace } from "../../const";
import { QuestData, State } from "../../types";


export const getQuest = (state: State): QuestData => state[NameSpace.Quest].quest;
export const getQuests = (state: State): QuestData[] => state[NameSpace.Quest].quests;
export const getQuestLoadStatus = (state: State): boolean => state[NameSpace.Quest].isQuestLoaded;
export const getQuestsLoadedStatus = (state: State): boolean => state[NameSpace.Quest].isDataLoaded;
export const getQuestId = (state: State): string => state[NameSpace.Quest].questId;
export const getQuestType = (state: State): string => state[NameSpace.Quest].questType;
export const getErrorMessage = (state: State): string => state[NameSpace.Quest].errorMessage;
export const getSuccessMessage = (state: State): string => state[NameSpace.Quest].successMessage;
