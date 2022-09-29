import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch, FormInputType, QuestData, State } from '../types';
import { APIRoute } from '../const';


export const fetchQuestsAction = createAsyncThunk<QuestData[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'quest/fetchQuests',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<QuestData[]>(APIRoute.Quests);
    return data;
  },
);

export const fetchQuestAction = createAsyncThunk<QuestData, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'quest/fetchQuest',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<QuestData>(`${APIRoute.Quests}/questId`);
    return data;
  },
);

export const postOrderAction = createAsyncThunk<void, FormInputType, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'order/orderPost',
  async (formInput, {extra: api}) => {
    api.post<FormInputType>(`${APIRoute.Order}`, formInput);
  }
);

