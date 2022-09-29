import { appTheme } from "./components/app/common";
import { store } from "./store";

export type QuestData = {
  id: number,
  title: string,
  description: string,
  previewImg: string,
  coverImg: string,
  type: string,
  level: string,
  peopleCount: number[],
  duration: number
}

export type FormInputType ={
  name: string,
  phone: string,
  peopleCount: string,
  isLegal: boolean
}

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;
export type AppThemeType = typeof appTheme
