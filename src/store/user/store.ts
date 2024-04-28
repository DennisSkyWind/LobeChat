import { StoreApi } from 'zustand';
import { createContext } from 'zustand-utils';
import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';
import { StateCreator } from 'zustand/vanilla';

import { isDev } from '@/utils/env';

import { UserStoreState, initialState } from './initialState';
import { AuthAction, createFileSlice } from './slices/auth';

//  ===============  聚合 createStoreFn ============ //

export type UserStore = UserStoreState & AuthAction;

const createStore: StateCreator<UserStore, [['zustand/devtools', never]]> = (...parameters) => ({
  ...initialState,
  ...createFileSlice(...parameters),
});

//  ===============  实装 useStore ============ //
let store: any;

export const createUserStore = () => {
  if (store) return store;

  store = createWithEqualityFn<UserStore>()(
    devtools(createStore, {
      name: 'LobeChat_User' + (isDev ? '_DEV' : ''),
    }),
    shallow,
  );

  return store;
};

export const {
  useStore: useUserStore,
  useStoreApi: useUserStoreApi,
  Provider: UserStoreProvider,
} = createContext<StoreApi<UserStore>>();
