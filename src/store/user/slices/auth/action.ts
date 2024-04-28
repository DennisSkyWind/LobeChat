import { StateCreator } from 'zustand/vanilla';

import { setNamespace } from '@/utils/storeDebug';

import { UserStore } from '../../store';

const n = setNamespace('auth');

export interface AuthAction {
  getUserConfig: () => void;
}

export const createFileSlice: StateCreator<
  UserStore,
  [['zustand/devtools', never]],
  [],
  AuthAction
> = () => ({
  getUserConfig: () => {
    console.log(n('userconfig'));
  },
});
