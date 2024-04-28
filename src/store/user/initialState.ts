import { UserAuthState, initialUserState } from './slices/auth';

export type UserStoreState = UserAuthState;

export const initialState: UserStoreState = {
  ...initialUserState,
};
