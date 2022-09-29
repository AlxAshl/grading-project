import axios, {AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig} from 'axios';
import {StatusCodes} from 'http-status-codes';
import { APIRoute, BACKEND_URL, REQUEST_TIMEOUT } from '../const';
import { store } from '../store';
import {errorMessageText} from '../store/quest-process/quest-process'


const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.NOT_FOUND]: true,
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      if ((error.response && shouldDisplayError(error.response)) || error.code === "ETIMEDOUT") {
        const errorMessage = `${error.message}`
        const errorMessageEmpty = ''
        store.dispatch(errorMessageText(errorMessage))
        setTimeout(() => {store.dispatch(errorMessageText(errorMessageEmpty))}, 5000);
      }
      throw error;
    },
  );

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      if(config.url === `${APIRoute.Quests}/questId`){
        const state = store.getState();
        config.url = `${APIRoute.Quests}/${state.QUEST.questId}`;
      }
      return config;
    }
  )

  return api;
};

