import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../const";
import { QuestData } from "../../types";
import { fetchQuestsAction, fetchQuestAction } from "../api-actions";

export type QuestDataProcess = {
  isDataLoaded: boolean,
  isQuestLoaded: boolean,
  quests: QuestData[],
  quest: QuestData,
  questId: string,
  questType: string,
  errorMessage: string,
  successMessage: string
}

const initialState: QuestDataProcess = {
  isDataLoaded:false,
  isQuestLoaded: false,
  quests: [],
  quest: {} as QuestData,
  questId: '',
  questType: 'Все квесты',
  errorMessage: '',
  successMessage: '',
};

export const questProcess = createSlice({
  name: NameSpace.Quest,
  initialState,
  reducers: {
    questId: (state, action) => {
      state.questId = action.payload;
    },
    questType: (state, action) => {
      state.questType = action.payload;
    },
    errorMessageText: (state, action) => {
      state.errorMessage = action.payload
    },
    successMessageText: (state, action) => {
      state.successMessage = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsAction.pending, (state) => {
        state.isDataLoaded = false;
      })
      .addCase(fetchQuestsAction.fulfilled, (state, action) => {
        state.isDataLoaded = true;
        state.quests = action.payload;
      })
      .addCase(fetchQuestAction.pending, (state) => {
        state.isQuestLoaded = false;
      })
      .addCase(fetchQuestAction.fulfilled, (state, action) => {
        state.isQuestLoaded = true;
        state.quest = action.payload;
      })
  }
})

export const {questId, questType, errorMessageText, successMessageText} = questProcess.actions;
